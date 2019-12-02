import TYPES from "../actions/types";

const INITIAL_STATE = {
  tabContent: [
    {
      type: "Flight",
      title: {
        type: "Flight",
        duration: "Return, 1 Person",
        icon: "plane"
      }
    },
    {
      type: "Hotel",
      title: {
        type: "Hotel",
        duration: "2 Days, 1 Room",
        icon: "bed"
      }
    },
    {
      type: "Car",
      title: {
        type: "Car",
        duration: "2 Days",
        icon: "car"
      }
    },
    {
      type: "Total",
      title: {
        type: "Trip Overview",
        duration: "2 Days",
        icon: ""
      }
    }
  ],
  flightPrice: 0,
  hotelPrice: 0,
  carPrice: 0
};

export const UIReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.FLIGHT_SELECT:
      return {
        ...state,
        flightPrice:
          parseInt(action.payload.departing.price) +
          parseInt(action.payload.returning.price)
      };
    case TYPES.HOTEL_SELECT:
      return {
        ...state,
        hotelPrice: parseInt(action.payload.price)
      };
    case TYPES.CAR_SELECT:
      return {
        ...state,
        carPrice: parseInt(action.payload.price)
      };
    case TYPES.SET_CAR_INIT:
      return {
        ...state,
        carPrice: parseInt(action.payload[0].price)
      };
    case TYPES.SET_HOTEL_INIT:
      return {
        ...state,
        hotelPrice: parseInt(action.payload[0].price)
      };
    case TYPES.SET_FLIGHT_INIT:
      return {
        ...state,
        flightPrice: parseInt(action.payload[0].total)
      };
    default:
      return state;
  }
};
