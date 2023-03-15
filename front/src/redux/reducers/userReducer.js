import { ActionTypes } from "../constants/action-types";
const intialState = {
  users: []
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REGISTER_USER:
      return { ...state, users: payload };
    default:
      return state;
  }
};

