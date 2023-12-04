import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "./actionTypes";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text },
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const changeTodo = (id: string, state: boolean) => ({
  type: CHANGE_TODO,
  payload: { id, state },
});
