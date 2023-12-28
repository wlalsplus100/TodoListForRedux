import { MIDDLEWARE_TODO_CHANGE } from "../actions/actionTypes";

interface UpdateAction {
  type: typeof MIDDLEWARE_TODO_CHANGE;
  payload: { flag: boolean };
}

const initState: boolean = false;

const updateReducer = (state = initState, action: UpdateAction) => {
  switch (action.type) {
    case MIDDLEWARE_TODO_CHANGE:
      return !state;
    default:
      return state;
  }
};

export default updateReducer;
