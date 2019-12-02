import { combineReducers } from "redux";
import { AccordionReducer } from "./AccordionReducer";
import { CarRentalReducer } from "./CarRentalReducer";
import { FlightReducer } from "./FlightReducer";
import { HotelReducer } from "./HotelReducer";
import { UserReducer } from "./UserReducer";
import { UIReducer } from "./UIReducer";

export default combineReducers({
  AccordionReducer: AccordionReducer,
  CarRentalReducer: CarRentalReducer,
  FlightReducer: FlightReducer,
  HotelReducer: HotelReducer,
  UIReducer: UIReducer,
  UserReducer: UserReducer
});
