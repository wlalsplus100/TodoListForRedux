import styled from "styled-components";
import AddContainer from "./AddContainer";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import React, { useLayoutEffect, useRef, useState } from "react";
import { RootState } from "../store/configureStore";
import { Todo } from "../modules/types/type";

const Background = () => {
  const todoIds = useSelector((state: RootState) => state.todo);
  const endTodo = useRef<HTMLDivElement>(null);
  const updateTodo = useSelector((state: RootState) => state.flag);
  const [nowPage, setNowPage] = useState<number>(0);

  useLayoutEffect(() => {
    console.log(endTodo.current);
    endTodo.current?.scrollIntoView({ behavior: "smooth" });
  }, [updateTodo]);

  const renderTodo = (todo: Todo, i: number) => {
    if (todoIds.length === i + 1) {
      return (
        <TodoItem todoId={todo.id} key={todo.id} setRef={endTodo}></TodoItem>
      );
    }
    return <TodoItem todoId={todo.id} key={todo.id}></TodoItem>;
  };

  const changePage = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const mode = event.currentTarget.getAttribute("mode");
    switch (mode) {
      case "increase":
        if (nowPage < 2) {
          setNowPage(nowPage + 1);
          return "sucess";
        }
        break;
      case "decrease":
        if (nowPage > 0) {
          setNowPage(nowPage - 1);
          return "sucess";
        }
        break;
      default:
        break;
    }
    return;
  };

  const renderModeText = () => {
    switch (nowPage) {
      case 0:
        return <>모든 Todo</>;
      case 1:
        return <>남은 Todo</>;
      case 2:
        return <>완료한 Todo</>;
    }
  };

  const renderTodoSection = () => {
    switch (nowPage) {
      case 0:
        return (
          <TodoSection>
            {todoIds && todoIds.map((todo, i) => renderTodo(todo, i))}
          </TodoSection>
        );
      case 1:
        return (
          <TodoSection>
            {todoIds &&
              todoIds
                .filter((todo) => todo.state === false)
                .map((todo, i) => renderTodo(todo, i))}
          </TodoSection>
        );
      case 2:
        return (
          <TodoSection>
            {todoIds &&
              todoIds
                .filter((todo) => todo.state === true)
                .map((todo, i) => renderTodo(todo, i))}
          </TodoSection>
        );
    }
  };

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer />
      {renderModeText()}
      <SlideContainer>
        <SlideButton onClick={changePage} mode={"decrease"}>
          &lt;
        </SlideButton>
        <ul>{renderTodoSection()}</ul>
        <SlideButton onClick={changePage} mode={"increase"}>
          &gt;
        </SlideButton>
      </SlideContainer>
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

const TodoSection = styled.li`
  width: 400px;
  height: 70vh;
  background-color: white;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
    height: 100%;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff3af;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 10px;
  }

  @media screen and (min-width: 1024px) {
    width: 45vw;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    overflow: hidden;
    width: 45vw;
    position: relative;
  }
  & > ul > li {
    width: 100%;
  }
`;

const SlideButton = styled.button<{ mode: string }>`
  margin: 0px 30px;
  height: 36px;
  width: 36px;
  border: none;
  background-color: cadetblue;
  border-radius: 50%;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export default Background;
