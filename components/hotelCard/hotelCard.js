import React from "react";
import { View } from "react-native";
// Containers
import Card from "../../containers/card/card";
import UIButton from "../../containers/buttons/uiButton";
import HotelDetailCard from "./hotelDetailCard";
// Styles
import { styles } from "./hotelCardStyle";

const HotelCard = ({ index }) => {
  return (
    <Card index={index}>
      <View style={{ ...styles.hotelCardButtonContainer, paddingLeft: 30 }}>
        <UIButton title="Name" />
        <UIButton title="Price" />
        <UIButton title="Type" />
        <UIButton title="Location" />
      </View>
      <HotelDetailCard />
    </Card>
  );
};

export default HotelCard;
