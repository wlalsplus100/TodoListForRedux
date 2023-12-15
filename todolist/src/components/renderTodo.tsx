import { useSelector } from "react-redux";
import { Todo } from "../modules/types/type";

export default function useRenderTodos(todoId: string) {
  return useSelector((state: Todo[]) => {
    const todo = state.find((t: Todo) => t.id === todoId);
    return todo || null;
  });
}
