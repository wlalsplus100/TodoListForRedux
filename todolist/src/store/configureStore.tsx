import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer";

const store = configureStore({ reducer: todoReducer, devTools: true });

export default store;
