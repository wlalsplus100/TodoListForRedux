import styled from "styled-components";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

const AddContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const todoInput = useRef<HTMLInputElement>(null);

  const handleChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setText(value);
  };

  const handleClick = () => {
    console.log("눌림");
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
      if (todoInput.current) {
        todoInput.current.value = "";
      }
    } else {
      alert("내용을 입력해주세요!");
      setText("");
      if (todoInput.current) {
        todoInput.current.value = "";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <Container>
      <TodoInput
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        ref={todoInput}
      />
      <AddButton onClick={handleClick}>추가</AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  width: 400px;

  @media screen and (min-width: 1024px) {
    width: 45vw;
  }
`;

const TodoInput = styled.input`
  border: none;
  outline: none;
  height: 24px;
  font-size: 16px;
  flex-grow: 1;
`;

const AddButton = styled.button`
  background-color: #ffb700;
  border: none;
  /* box-shadow: 1px 1px 3px; */
  transition: all 1s;
  border-radius: 8px;
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
