import React from "react";
import { View } from "react-native";
// Containers
import Card from "../../containers/card/card";
import UIButton from "../../containers/buttons/uiButton";
import CarDetailCard from "./carDetailCards";
// Styles
import { styles } from "./carCardStyle";

const CarCard = ({ index }) => {
  return (
    <Card index={index}>
      <View
        style={{
          ...styles.carCardButtonContainer,
          paddingLeft: 30,
          marginBottom: 20
        }}
      >
        <UIButton title="Supplier" />
        <UIButton title="Price" />
        <UIButton title="Type" />
        <UIButton title="Pickup" />
        <UIButton title="Drop off" />
      </View>
      <CarDetailCard />
    </Card>
  );
};

export default CarCard;
