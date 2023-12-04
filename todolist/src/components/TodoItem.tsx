import { useState } from "react";
import styled from "styled-components";
import { TodoItemType } from "../modules/types/type";

const TodoItem = ({ name, clear, id, todos, setTodos }: TodoItemType) => {
  const [clearText, setClearText] = useState(clear);

  const clearHandler = () => {
    setClearText(!clearText);
  };

  const delHender = () => {
    setTodos(
      todos.filter((e) => {
        return e.id !== id;
      })
    );
  };

  return (
    <Container>
      <span>{name}</span>
      <ClearButton onClick={clearHandler}>
        {clearText === true ? "✅" : "❎"}
      </ClearButton>
      <DelButton onClick={delHender}>삭제</DelButton>
    </Container>
  );
};

const Container = styled.div`
  font-size: 16px;
  padding: 0.5em;
  background-color: #ffd900;
  display: flex;
  gap: 1em;
  & > span {
    flex-basis: 300px;
    flex-grow: 1;
  }
  &:hover {
    border: 1px solid black;
  }
`;

const ClearButton = styled.button`
  all: unset;
  &:hover {
    cursor: pointer;
  }
`;

const DelButton = styled.button`
  all: unset;
  background-color: #b6ff2e;
  cursor: pointer;
`;

export default TodoItem;
