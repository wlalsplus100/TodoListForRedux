interface Todo {
  name?: string;
  clear?: boolean;
  id?: string;
}

interface TodoItemType {
  name?: string;
  clear?: boolean;
  id?: string;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo> | null>>;
}

export type { Todo, TodoItemType };
