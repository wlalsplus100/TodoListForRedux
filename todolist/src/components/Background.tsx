import styled from "styled-components";
import { useMemo } from "react";
import AddContainer from "./AddContainer";
import { useSelector } from "react-redux";
import { RootState, Todo } from "../modules/types/type";
import TodoItem from "./TodoItem";
import { createSelector } from "@reduxjs/toolkit";

const Background = () => {
  const selectTodos = (state: RootState) => state.todos;

  const selectTodoIds = createSelector(
    [selectTodos],
    (todos) => (todos && todos.map((t: Todo) => t.id.toString())) || []
  );

  const todoIds = useSelector(selectTodoIds);

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer />
      <TodoSection>
        {todoIds.map((id) => (
          <TodoItem todoId={id} key={id}></TodoItem>
        ))}
      </TodoSection>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Header = styled.h1`
  color: black;
  margin-top: 5vh;
`;

const TodoSection = styled.section`
  width: 400px;
  height: 70vh;
  background-color: white;
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    width: 45vw;
  }
`;

export default Background;
