import { useSelector } from "react-redux";
import { Todo } from "../modules/types/type";
import { RootState } from "../store/configureStore";

export default function useRenderTodos(todoId: string) {
  return useSelector((state: RootState) => {
    const todo = state.todo.find((t: Todo) => t.id === todoId);
    return todo || null;
  });
}
