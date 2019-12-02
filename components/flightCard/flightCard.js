import React from "react";
import { View } from "react-native";
// Containers
import Card from "../../containers/card/card";
import UIButton from "../../containers/buttons/uiButton";
import FlightDetailCard from "./flightDetailCard";
// Styles
import { styles } from "./flightCardStyle";

const FlightCard = ({ index }) => {
  return (
    <Card index={index}>
      <View
        style={{
          ...styles.flightCardButtonContainer,
          paddingLeft: 30
        }}
      >
        <UIButton title="Airlines" />
        <UIButton title="Stops" />
        <UIButton title="Time In" />
        <UIButton title="Time Out" />
      </View>
      <FlightDetailCard />
    </Card>
  );
};

export default FlightCard;
