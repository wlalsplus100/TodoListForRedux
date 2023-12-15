interface Todo {
  id: string;
  text: string;
  state: boolean;
}

interface TodoItemType {
  id?: string;
  text?: string;
  state?: boolean;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo> | null>>;
}

export type { Todo, TodoItemType };
