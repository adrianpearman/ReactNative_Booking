// Dependancies and Components
import React from "react";
import { View } from "react-native";
import Booking from "../booking/booking";
// Styles
import { styles } from "./cardStyle";

const Card = ({ index, children }) => {
  const activeBackgroundColor =
    index % 2 === 0
      ? styles.cardHeroTextContainer1
      : styles.cardHeroTextContainer2;

  return (
    <View
      style={{
        ...styles.cardContainer,
        ...activeBackgroundColor
      }}
    >
      {children}
      <Booking />
    </View>
  );
};

export default Card;
