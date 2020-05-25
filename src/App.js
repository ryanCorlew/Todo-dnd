import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import TodoApp from "./TodoApp";

class App extends React.Component {
  state = {
    todos: [],
    columns: [
      {
        id: "column-1",
        title: "ToDo",
        todoIds: [],
      },
      {
        id: "column-2",
        title: "In Progress",
        todoIds: [],
      },
      {
        id: "column-3",
        title: "Complete!",
        todoIds: [],
      },
    ],
    newTodo: "",
  };

  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let columns = JSON.parse(localStorage.getItem("columns"));

    if (todos && columns) {
      this.setState({ todos: todos, columns: columns });
    }
  }

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
      const newColumns = [...this.state.columns];
      const startColumn = newColumns.find(
        (column) => column.id === source.droppableId
      );
      const endColumn = newColumns.find(
        (column) => column.id === destination.droppableId
      );
      const startTodos = [...startColumn.todoIds];
      const endTodos = [...endColumn.todoIds];

      startTodos.splice(source.index, 1);
      endTodos.splice(destination.index, 0, draggableId);

      startColumn.todoIds = startTodos;
      endColumn.todoIds = endTodos;

      this.setState({ columns: newColumns }, () => {
        localStorage.setItem("columns", JSON.stringify(this.state.columns));
      });
      return;
    }

    const newColumns = [...this.state.columns];
    const column = newColumns.find(
      (column) => column.id === source.droppableId
    );

    const newTodos = [...column.todoIds];
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, draggableId);

    column.todoIds = newTodos;

    this.setState({ columns: newColumns }, () => {
      localStorage.setItem("columns", JSON.stringify(this.state.columns));
    });
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
    const newTodos = [...this.state.todos];
    const newColumns = [...this.state.columns];
    // Find first column
    const column = newColumns.find((column) => column.id === "column-1");
    // Get ids of first column
    const todoIds = [...column.todoIds];
    // Populate ID for new task
    const id = uuidv4();
    // Push id into column
    todoIds.push(id);
    // Put new task in todos object
    newTodos.push({ id: id, task: this.state.newTodo });
    // Set todoIds array to column object
    column.todoIds = todoIds;

    // Update state
    this.setState({ todos: newTodos, columns: newColumns, newTodo: "" }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      localStorage.setItem("columns", JSON.stringify(this.state.columns));
    });
  };

  deleteHandler = (id) => {
    const task = this.state.todos.find((todo) => todo.id === id);

    if (task) {
      const newColumns = this.state.columns.reduce((prev, cur) => {
        cur.todoIds = cur.todoIds.filter((todoId) => todoId !== id);
        prev.push(cur);
        return prev;
      }, []);

      const newTodos = this.state.todos.filter((todo) => todo.id !== id);

      this.setState({ todos: newTodos, columns: newColumns }, () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
        localStorage.setItem("columns", JSON.stringify(this.state.columns));
      });
    }
  };

  render() {
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
          onDelete={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
