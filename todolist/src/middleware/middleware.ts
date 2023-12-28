import { ADD_TODO } from "../actions/actionTypes";
import { middlewareTodoChange } from "../actions/updateActions";

const myMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === ADD_TODO) {
    store.dispatch(middlewareTodoChange(true));
  }
  return next(action);
};

export default myMiddleware;
