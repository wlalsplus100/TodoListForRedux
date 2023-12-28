import { MIDDLEWARE_TODO_CHANGE } from "./actionTypes";

export const middlewareTodoChange = (flag: boolean) => ({
  type: MIDDLEWARE_TODO_CHANGE,
  payload: { flag },
});
