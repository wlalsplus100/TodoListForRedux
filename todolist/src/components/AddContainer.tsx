import styled from "styled-components";
import { useRef } from "react";
import { Todo } from "../modules/types/type";

const AddContainer = ({
  todo,
  setTodo,
}: {
  todo: Array<Todo> | null;
  setTodo: React.Dispatch<React.SetStateAction<Array<Todo> | null>>;
}) => {
  const input = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (input.current) {
      if (todo) {
        setTodo([
          ...todo,
          { name: input.current.value, clear: false, id: `${todo.length}` },
        ]);
      } else {
        setTodo([{ name: input.current.value, clear: false, id: "0" }]);
      }
      input.current.value = "";
    }
  };

  return (
    <Container>
      <TodoInput ref={input} />
      <AddButton onClick={addTodo}>추가</AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const TodoInput = styled.input`
  border: none;
  outline: none;
  width: 400px;
  height: 24px;
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    width: 45vw;
  }
`;

const AddButton = styled.button`
  background-color: #ffb700;
  border: none;
  box-shadow: 1px 1px 3px;
  &:hover {
    cursor: pointer;
    background-color: cyan;
  }
  &:active {
    background-color: red;
    box-shadow: inset 4px 3px 3px;
  }
`;

export default AddContainer;
