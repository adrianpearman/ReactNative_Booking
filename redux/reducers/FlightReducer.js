import TYPES from "../actions/types";

const INITIAL_STATE = {
  flightInformation: [],
  fetchFlightInformation: null
};

export const FlightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        flightInformation: action.payload.flightInformation,
        fetchFlightInformation: action.dataFetched
      };
    default:
      return state;
  }
};
