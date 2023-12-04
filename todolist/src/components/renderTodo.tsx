import { useSelector } from "react-redux";
import { Todo } from "../modules/types/type";
import { RootState } from "../modules/types/type";

export default function useRenderTodos(todoId: string) {
  return useSelector((state: RootState) => {
    const todo = state.todos.find((t: Todo) => t.id === todoId);
    return todo || null;
  });
}
