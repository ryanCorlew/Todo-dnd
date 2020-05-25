import React from "react";
import styled from "styled-components";
import DragHandle from "@material-ui/icons/DragHandle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "auto",
  },
});

const Task = styled.div`
  min-height: 2rem;
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

const Todo = ({ todo, index, onDelete }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <Task
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Handle>
            <DragHandle />
          </Handle>
          {todo.task}
          <IconButton
            onClick={() => onDelete(todo.id)}
            className={classes.root}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </Task>
      )}
    </Draggable>
  );
};

export default Todo;
