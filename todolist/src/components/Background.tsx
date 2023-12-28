import styled from "styled-components";
import AddContainer from "./AddContainer";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useLayoutEffect, useRef } from "react";
import { RootState } from "../store/configureStore";

const Background = () => {
  const todoIds = useSelector((state: RootState) => state.todo);
  const endTodo = useRef<HTMLDivElement>(null);
  const updateTodo = useSelector((state: RootState) => state.flag);
  console.log("렌더링!");

  useLayoutEffect(() => {
    console.log(endTodo.current);
    endTodo.current?.scrollIntoView({ behavior: "smooth" });
  }, [updateTodo]);

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer />
      <SlideContainer>
        <SlideButton>&lt;</SlideButton>
        <ul>
          <TodoSection>
            {todoIds &&
              todoIds.map((todo, i) => {
                if (todoIds.length === i + 1) {
                  console.log("마지막 todo");
                  return (
                    <TodoItem
                      todoId={todo.id}
                      key={todo.id}
                      setRef={endTodo}
                    ></TodoItem>
                  );
                }
                return <TodoItem todoId={todo.id} key={todo.id}></TodoItem>;
              })}
          </TodoSection>
        </ul>
        <SlideButton>&gt;</SlideButton>
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
  }
`;

const SlideButton = styled.button`
  margin: 0px 30px;
  height: 36px;
  width: 36px;
  border: none;
  background-color: cadetblue;
  border-radius: 50%;
  color: white;
`;

export default Background;
