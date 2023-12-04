import styled from "styled-components";
import { useState } from "react";
import { RootState, Todo } from "../modules/types/type";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const AddContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");

  const handleChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  const handleClick = () => {
    console.log("눌림");
    dispatch(addTodo(text));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container>
      <TodoInput onChange={handleChange} onKeyDown={handleKeyPress} />
      <AddButton onClick={handleClick}>추가</AddButton>
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
