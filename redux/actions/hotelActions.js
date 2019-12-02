import TYPES from "./types";
import { AsyncStorage } from "react-native";

const localHotelStorage = "selectedHotel";

// Helper function for updating state
const updateHotelState = (type, data) => {
  return {
    type: type,
    payload: data
  };
};

// Updating selected state
export const selectHotel = hotel => {
  return async dispatch => {
    try {
      // Checking to see if any hotels are currently saved
      const currentlySavedHotel = await AsyncStorage.getItem(localHotelStorage);
      // Parsing the saved values
      let newHotel = JSON.parse(currentlySavedHotel);
      // Resetting or Initializing the local storage value
      if (!newHotel || newHotel) {
        newHotel = [];
      }
      // Adding the selected flight
      newHotel.push(hotel);
      // Setting values to local storage
      await AsyncStorage.setItem(localHotelStorage, JSON.stringify(newHotel));
      dispatch(updateHotelState(TYPES.HOTEL_SELECT, hotel));
    } catch (error) {
      console.log(error);
    }
  };
};

// Retrieving state from localstorage
export const setHotel = () => {
  return async dispatch => {
    try {
      const localSavedHotel = await AsyncStorage.getItem(localHotelStorage);

      let currentlySavedHotel = JSON.parse(localSavedHotel);

      if (!currentlySavedHotel || currentlySavedHotel.length === 0) {
        currentlySavedHotel = [
          {
            name: "",
            description: "",
            secondaryDescription: "",
            price: 0,
            image: "",
            rating: "",
            ratingText: "",
            starRatingNumber: ""
          }
        ];
      }

      dispatch(updateHotelState(TYPES.SET_HOTEL_INIT, currentlySavedHotel));
    } catch (error) {
      console.log(error);
    }
  };
};
