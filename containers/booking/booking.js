//
import React from "react";
import { View, Text } from "react-native";
// Styles
import { styles } from "./bookingStyle";
import { UI_COLORS } from "../../styles/colors";

const Booking = () => {
  return (
    <View style={styles.buttonRow}>
      <View style={styles.buttonContainerLeft}>
        <View style={styles.buttonContainerButton}>
          <Text style={styles.buttonContainerButtonText}>
            Book with Boooking.com
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainerRight}>
        <Text style={{ fontFamily: "Roboto-Bold", color: UI_COLORS.Grey }}>
          Booked?
        </Text>
        <View style={styles.bookedSelected}></View>
      </View>
    </View>
  );
};

export default Booking;
