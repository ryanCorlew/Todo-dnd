import React from "react";
import Column from "./Column";

const ListColumns = ({ todosObj, columns, columnOrder }) => {
  return columnOrder.map((columnId) => {
    const column = columns[columnId];
    const todos = column.todoIds.map((todoId) => todosObj[todoId]);

    return <Column key={column.id} todos={todos} column={column} />;
  });
};

export default ListColumns;
