import styled from "styled-components";
import { Todo } from "../modules/types/type";
import { useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "../actions/todoActions";
import useRenderTodos from "./renderTodo";

interface TodoItemProps {
  todoId: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoId }) => {
  const dispatch = useDispatch();
  const todo: Todo | null = useRenderTodos(todoId);

  const handleClick = () => {
    todo?.id && dispatch(removeTodo(todo.id));
  };

  const handleState = () => {
    if (todo) {
      dispatch(changeTodo(todo.id, todo.state));
    }
  };

  return (
    <Container>
      <span>{todo?.text}</span>
      <ClearButton onClick={handleState}>
        {todo?.state === true ? "✅" : "❎"}
      </ClearButton>
      <DelButton onClick={handleClick}>삭제</DelButton>
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
