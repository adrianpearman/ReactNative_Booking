import React from "react";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  Text,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// Styles
import { styles } from "./carCardStyle";
import { UI_COLORS } from "../../styles/colors";
// Redux
import { selectCar } from "../../redux/actions/carActions";

const CarDetailCard = props => {
  const cars = props.CarRentalReducer.carRentalInformation.map((car, i) => {
    let rentalLogo = "../../assets/images/Enterprise.png";

    return (
      <TouchableOpacity
        style={styles.carDetailCard}
        key={i}
        onPress={() => props.selectCar(car)}
      >
        <View style={{ borderRadius: 20, height: "100%", overflow: "hidden" }}>
          <ImageBackground
            style={styles.carImageContainer}
            source={{ url: car.image }}
          >
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.10)", "rgba(0, 0, 0, 0.50)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ flex: 1, justifyContent: "space-between" }}
            ></LinearGradient>
          </ImageBackground>
          <View style={{ height: "30%" }}>
            <View style={{ paddingLeft: 15, paddingTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.carTextContainer}>
                  <View>
                    <Text style={styles.carNamePrimaryTextBold}>
                      {car.model}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.carNamePrimaryText}>or similar</Text>
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <Image
                    style={{ height: 20, width: 50 }}
                    source={{ url: car.rentalCompanyLogo }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.carNameSecondaryTextContainer}>
              <View>
                <Text
                  style={{ ...styles.carNameSecondaryText, marginRight: 3 }}
                >
                  {car.modelLevel}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...styles.carNameSecondaryText,
                    color: UI_COLORS.DarkGrey
                  }}
                >
                  {car.numberOfSeats} Seats
                </Text>
              </View>
            </View>
            <View style={styles.carNameSecondaryTextContainer}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    ...styles.carNameSecondaryText,
                    textAlign: "left",
                    color: UI_COLORS.DarkGrey
                  }}
                >
                  {car.storageCapacity}
                </Text>
              </View>
              <View style={{ width: "50%" }}>
                <Text
                  style={{
                    ...styles.carNameSecondaryText,
                    textAlign: "right",
                    paddingRight: 15,
                    color: UI_COLORS.DarkGrey
                  }}
                >
                  Great Deal
                </Text>
              </View>
            </View>
            <View style={{ paddingLeft: 15, paddingTop: 10 }}>
              <Text
                style={{
                  ...styles.carNameSecondaryText,
                  color: UI_COLORS.DarkGrey
                }}
              >
                {car.rating}
              </Text>
            </View>
            <View
              style={{
                paddingLeft: 15,
                paddingTop: 10,
                flexDirection: "row",
                marginTop: 5
              }}
            >
              <View
                style={{
                  ...styles.carNameDescriptionLeft,
                  flexDirection: "row"
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <Text
                    style={{
                      ...styles.carNameSecondaryText,
                      color: UI_COLORS.DarkGrey
                    }}
                  >
                    Pick Up
                  </Text>
                </View>
                <View>
                  <Text style={styles.carNameSecondaryText}>In terminal</Text>
                </View>
              </View>
              <Text style={styles.carNameDescriptionRight}>
                <Text style={styles.carNameDescriptionRightBold}>
                  C${car.price}
                </Text>
                <Text>/ night</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <ScrollView horizontal={true} style={{ marginLeft: 30 }}>
      {cars}
    </ScrollView>
  );
};

const mapDispatchToProps = {
  selectCar
};

const mapStateToProps = state => {
  const { CarRentalReducer } = state;
  return { CarRentalReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailCard);
