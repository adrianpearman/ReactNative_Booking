import TYPES from "./types";
import { AsyncStorage } from "react-native";

const localHotelStorage = "selectedCar";

const updatedCarState = (type, data) => {
  return {
    type: type,
    payload: data
  };
};

export const selectCar = car => {
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
      newHotel.push(car);
      // Setting values to local storage
      await AsyncStorage.setItem(localHotelStorage, JSON.stringify(newHotel));

      dispatch(updatedCarState(TYPES.SET_CAR_INIT, newHotel));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCar = () => {
  return async dispatch => {
    try {
      const localSavedCar = await AsyncStorage.getItem(localHotelStorage);

      currentlySavedCar = JSON.parse(localSavedCar);

      if (!currentlySavedCar || currentlySavedCar.length === 0) {
        currentlySavedCar = [
          {
            image: "",
            model: "",
            modelLevel: "",
            numberOfSeats: "0",
            price: 0,
            rating: "",
            rentalCompany: "",
            rentalCompanyLogo: "",
            storageCapacity: ""
          }
        ];
      }
      dispatch(updatedCarState(TYPES.SET_CAR_INIT, currentlySavedCar));
    } catch (error) {
      console.log(error);
    }
  };
};
