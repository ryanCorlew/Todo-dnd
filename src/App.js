import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoApp from "./TodoApp";

class App extends React.Component {
  state = {
    todos: {},
    columns: {
      "column-1": {
        id: "column-1",
        title: "ToDo",
        todoIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        todoIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Complete!",
        todoIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
    newTodo: "",
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      const startColumn = this.state.columns[source.droppableId];
      const endColumn = this.state.columns[destination.droppableId];
      const startTodos = [...startColumn.todoIds];
      const endTodos = [...endColumn.todoIds];
      const newColumns = { ...this.state.columns };

      startTodos.splice(source.index, 1);
      endTodos.splice(destination.index, 0, draggableId);

      newColumns[source.droppableId].todoIds = startTodos;
      newColumns[destination.droppableId].todoIds = endTodos;
      console.log("new columns---", newColumns);
      this.setState({ columns: newColumns });
      return;
    }

    const column = this.state.columns[source.droppableId];

    const newTodos = [...column.todoIds];
    const newColumns = { ...this.state.columns };
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, draggableId);

    newColumns[destination.droppableId].todoIds = newTodos;

    this.setState({ columns: newColumns });
  };

  inputChangeHandler = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  addFormSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.newTodo === "") {
      return;
    }
    // Copy Todos and Columns
    const newTodos = { ...this.state.todos };
    const newColumns = { ...this.state.columns };
    // Find first column
    const column = this.state.columns["column-1"];
    // Get ids of first column
    const todoIds = [...column.todoIds];
    // Populate ID for new task
    const id = uuidv4();
    // Push id into column
    todoIds.push(id);
    // Put new task in todos object
    newTodos[id] = { id: id, task: this.state.newTodo };
    // Set todoIds array to column object
    newColumns["column-1"].todoIds = todoIds;

    // Update state
    this.setState({ todos: newTodos, columns: newColumns, newTodo: "" });
  };

  render() {
    console.log("columns----", this.state.columns);
    return (
      <div className="App">
        <h1 className="Title">
          Todo<span>List</span>
        </h1>
        <p className="SubTitle">With Drag and Drop</p>
        <TodoApp
          state={this.state}
          onDragEnd={this.onDragEnd}
          change={this.inputChangeHandler}
          submit={this.addFormSubmitHandler}
          click={this.addFormSubmitHandler}
        />
      </div>
    );
  }
}

export default App;
