import { configureStore, Tuple } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer";
import myMiddleware from "../middleware/middleware";
import { combineReducers } from "redux";
import updateReducer from "../reducers/updateTodo";

const reducer = combineReducers({
  todo: todoReducer,
  flag: updateReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: () => new Tuple(myMiddleware),
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
