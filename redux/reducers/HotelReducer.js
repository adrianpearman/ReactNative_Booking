import TYPES from "../actions/types";

const INITIAL_STATE = {
  hotelInformation: [],
  fetchHotelInformation: null
};

export const HotelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        hotelInformation: action.payload.hotelInformation,
        fetchHotelInformation: action.dataFetched
      };
    default:
      return state;
  }
};
