import TYPES from "./types";
import data from "../../data.json";

const updateState = (type, data, status) => {
  return {
    type: type,
    payload: data,
    dataFetched: status
  };
};

export const fetchData = () => {
  return async dispatch => {
    try {
      // This section for a real application would make a network request to gather the app information
      dispatch(updateState(TYPES.FETCH_DATA, data, "complete"));
    } catch (error) {
      console.log(error);
    }
  };
};
