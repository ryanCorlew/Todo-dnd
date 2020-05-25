import React from "react";
import styled from "styled-components";
import DragHandle from "@material-ui/icons/DragHandle";
import { Draggable } from "react-beautiful-dnd";

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

const Todo = ({ todo, index }) => {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <Task ref={provided.innerRef} {...provided.draggableProps}>
          <Handle {...provided.dragHandleProps}>
            <DragHandle />
          </Handle>
          {todo.task}
        </Task>
      )}
    </Draggable>
  );
};

export default Todo;
