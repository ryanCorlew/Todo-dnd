import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import MyTextField from "./StyledComponents/MyTextField";
import MyButton from "./StyledComponents/MyButton";

import ListColumns from "./Components/ListColumns";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "20px",
  },
};

const useStyles = makeStyles(styles);

const TodoApp = ({ onDragEnd, state, change, submit, click }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <MyTextField change={change} value={state.newTodo} />
        <MyButton click={click} value={state.newTodo}>
          Add Todo
        </MyButton>
      </form>
      <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
        <Container className={classes.root}>
          <ListColumns
            todosObj={state.todos}
            columns={state.columns}
            columnOrder={state.columnOrder}
          />
        </Container>
      </DragDropContext>
    </React.Fragment>
  );
};

export default TodoApp;
