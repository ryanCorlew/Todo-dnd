import React from "react";
import Column from "./Column";

const ListColumns = ({ todosObj, columns, onDelete }) => {
  return columns.map((column) => {
    const todos = column.todoIds.map((todoId) =>
      todosObj.find((todo) => todo.id === todoId)
    );

    return (
      <Column
        key={column.id}
        todos={todos}
        column={column}
        onDelete={onDelete}
      />
    );
  });
};

export default ListColumns;
