import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "../actions/actionTypes";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  state: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: { text: string };
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: { id: string };
}

interface ChangeTodoAction {
  type: typeof CHANGE_TODO;
  payload: { id: string; state: boolean };
}

type TodoAction = AddTodoAction | RemoveTodoAction | ChangeTodoAction;

const initState: Todo[] = [];

const todoReducer = (state = initState, action: TodoAction): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = [
        ...state,
        { id: uuidv4(), text: action.payload.text, state: false },
      ];
      return newTodo;
    case REMOVE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    case CHANGE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.state = !todo.state;
          return todo;
        } else return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;
