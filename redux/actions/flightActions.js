import TYPES from "./types";
import { AsyncStorage } from "react-native";

const localFlightStorage = "selectedFlights";

const updateFlightState = (type, data) => {
  return {
    type: type,
    payload: data
  };
};

export const selectFlight = flight => {
  return async dispatch => {
    try {
      // Checking to see if any flights are currently saved
      const currentlySavedFlights = await AsyncStorage.getItem(
        localFlightStorage
      );
      // Parsing the saved values
      let newProduct = JSON.parse(currentlySavedFlights);
      // Resetting or Initializing the local storage value
      if (!newProduct || newProduct) {
        newProduct = [];
      }
      // Adding the selected flight
      newProduct.push(flight);
      // Setting values to local storage
      await AsyncStorage.setItem(
        localFlightStorage,
        JSON.stringify(newProduct)
      );
      dispatch(updateFlightState(TYPES.FLIGHT_SELECT, flight));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFlight = () => {
  return async dispatch => {
    try {
      const localSavedFlights = await AsyncStorage.getItem(localFlightStorage);

      let currentlySavedFlights = JSON.parse(localSavedFlights);

      if (!currentlySavedFlights || currentlySavedFlights.length === 0) {
        currentlySavedFlights = [
          {
            description: "",
            image: "",
            name: "",
            price: 0,
            rating: "",
            ratingText: "",
            secondaryDescription: "",
            starRatingNumber: "",
            total: 0
          }
        ];
      }
      dispatch(updateFlightState(TYPES.SET_FLIGHT_INIT, currentlySavedFlights));
    } catch (error) {
      console.log(error);
    }
  };
};
