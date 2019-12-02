import TYPES from "../actions/types";

const INITIAL_STATE = {
  selectedFlightInformation: {},
  selectedHotelInformation: {},
  selectedCarRentalInformation: {},
  userInformation: {
    title: "",
    departingDate: "",
    departingLocation: "",
    departingTime: "",
    returningDate: "",
    returningLocation: "",
    returningTime: "",
    tripDuration: ""
  }
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.payload
      };
    case TYPES.FLIGHT_SELECT:
      return {
        ...state,
        selectedFlightInformation: action.payload
      };
    case TYPES.HOTEL_SELECT:
      return {
        ...state,
        selectedHotelInformation: action.payload
      };
    case TYPES.CAR_SELECT:
      return {
        ...state,
        selectedCarRentalInformation: action.payload
      };
    default:
      return state;
  }
};
