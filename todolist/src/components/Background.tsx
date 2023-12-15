import styled from "styled-components";
import AddContainer from "./AddContainer";
import { useSelector } from "react-redux";
import { Todo } from "../modules/types/type";
import TodoItem from "./TodoItem";

const Background = () => {
  const todoIds = useSelector((state: Todo[]) => state);
  console.log("렌더링!");

  return (
    <Container>
      <Header>To Do List</Header>
      <AddContainer />
      <TodoSection>
        {todoIds &&
          todoIds.map((todo) => (
            <TodoItem todoId={todo.id} key={todo.id}></TodoItem>
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
