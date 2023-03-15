
import { ActionTypes } from "../constants/action-types";

export const registerUser = (users) => {
  return {
    type: ActionTypes.REGISTER_USER,
    payload: users,
  };
};



