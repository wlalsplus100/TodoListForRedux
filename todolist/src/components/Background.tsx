import styled from "styled-components";
import AddContainer from "./AddContainer";
import { useSelector } from "react-redux";
import { Todo } from "../modules/types/type";
import TodoItem from "./TodoItem";
import { useEffect, useRef } from "react";

const Background = () => {
  const todoIds = useSelector((state: Todo[]) => state);
  const endTodo = useRef<HTMLDivElement>(null);
  console.log("렌더링!");

  useEffect(() => {
    console.log(endTodo.current);
    endTodo.current?.scrollIntoView({ behavior: "smooth" });
  }, [todoIds]);

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer />
      <SliedContainer>
        <SliedButton>&lt;</SliedButton>
        <ul>
          <TodoSection>
            {todoIds &&
              todoIds.map((todo, i) => {
                console.log(todoIds.length);
                console.log(i);
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
        <SliedButton>&gt;</SliedButton>
      </SliedContainer>
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

const SliedContainer = styled.div`
  display: flex;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const SliedButton = styled.button`
  margin: 0px 30px;
  height: 36px;
  width: 36px;
  border: none;
  background-color: cadetblue;
  border-radius: 50%;
  color: white;
`;

export default Background;
