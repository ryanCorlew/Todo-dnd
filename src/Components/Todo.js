import React from "react";
import styled from "styled-components";
import DragHandle from "@material-ui/icons/DragHandle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import MyTextField from "../StyledComponents/MyTextField";
import EditForm from "./EditForm";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "2px",
  },
});

const Task = styled.div`
  min-height: 3rem;
  width: 12rem;
  margin: 8px;
  padding: 2px 8px 2px 8px;
  display: flex;
  text-align: left;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 1px #39373f;
  background-color: lightgrey;
`;

const Handle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`;

const BtnsContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const Todo = ({
  todo,
  index,
  onDelete,
  onEdit,
  showEditForm,
  editChange,
  editSubmit,
}) => {
  const classes = useStyles();

  let editOrDoneBtn = showEditForm ? (
    <IconButton
      onClick={(e) => editSubmit(e, todo.id)}
      className={classes.root}
    >
      <DoneIcon />
    </IconButton>
  ) : (
    <IconButton onClick={() => onEdit(todo.id)} className={classes.root}>
      <EditIcon />
    </IconButton>
  );

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <Task
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* <Handle>
            <DragHandle />
          </Handle> */}
          {showEditForm ? (
            <EditForm
              editSubmit={editSubmit}
              change={editChange}
              value={todo.task}
              id={todo.id}
            />
          ) : (
            todo.task
          )}
          <BtnsContainer>
            {editOrDoneBtn}
            <IconButton
              onClick={() => onDelete(todo.id)}
              className={classes.root}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </BtnsContainer>
        </Task>
      )}
    </Draggable>
  );
};

export default Todo;
