import TYPES from "../actions/types";

const INITIAL_STATE = {
  carRentalInformation: [],
  fetchCarInformation: null
};

export const CarRentalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        carRentalInformation: action.payload.carRentalInformation,
        fetchCarInformation: action.dataFetched
      };
    default:
      return state;
  }
};
