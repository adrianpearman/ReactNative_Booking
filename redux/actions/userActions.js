import TYPES from "./types";
import data from "../../data.json";

const updateUserState = (type, data) => {
  return {
    type: type,
    payload: data
  };
};

export const fetchUserInformation = () => {
  return async dispatch => {
    dispatch(
      updateUserState(TYPES.FETCH_USER_INFORMATION, data.UserInformation)
    );
  };
};
