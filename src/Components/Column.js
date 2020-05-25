import React from "react";
import Todo from "./Todo";
import MyCard from "../StyledComponents/MyCard";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Title = styled.h1`
  margin-top: 2px;
  border-bottom: solid;
`;

const TodoList = styled.div`
  //   background-color: blue;
  min-height: 25px;
`;

const Column = ({ todos, column, onDelete }) => {
  return (
    <MyCard>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TodoList ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <Todo
                key={todo.id}
                todo={todo}
                index={index}
                onDelete={onDelete}
              />
            ))}
            {provided.placeholder}
          </TodoList>
        )}
      </Droppable>
    </MyCard>
  );
};

export default Column;
