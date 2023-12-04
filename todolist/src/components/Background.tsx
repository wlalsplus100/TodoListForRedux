import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddContainer from "./AddContainer";
import { Todo } from "../modules/types/type";
import TodoItem from "./TodoItem";

const Background = () => {
  const [todo, setTodo] = useState<Array<Todo> | null>(null);

  const renderTodo = () => {
    return todo?.map((e) => {
      return (
        <TodoItem
          name={e.name}
          clear={e.clear}
          id={e.id}
          todos={todo}
          setTodos={setTodo}
        />
      );
    });
  };

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer todo={todo} setTodo={setTodo} />
      <TodoSection>{renderTodo()}</TodoSection>
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
