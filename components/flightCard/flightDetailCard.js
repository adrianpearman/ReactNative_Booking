import React from "react";
import { TouchableOpacity, ScrollView, View, Text, Image } from "react-native";
import { connect } from "react-redux";
// Styles
import { styles } from "./flightCardStyle";
import { UI_COLORS } from "../../styles/colors";
// Redux Actions
import { selectFlight } from "../../redux/actions/flightActions";

const FlightDetailCard = props => {
  const flights = props.FlightReducer.flightInformation.map((flight, i) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        key={i}
        onPress={() => props.selectFlight(flight)}
      >
        <View style={styles.flightDetailCard}>
          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "center",
              borderBottomColor: UI_COLORS.LightGrey,
              borderBottomWidth: 0.5,
              borderBottomStyle: "solid"
            }}
          >
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "left",
                  color: UI_COLORS.DarkGrey
                }}
              >
                Departing &#183; {flight.departing.date}
              </Text>
            </View>
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "right",
                  color: UI_COLORS.DarkGrey
                }}
              >
                Shortest
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "space-evenly",
              paddingTop: 20
            }}
          >
            <View>
              <Image
                style={styles.flightDetailsCardImage}
                source={{ url: flight.departing.companyLogo }}
              />
            </View>
            <View>
              <Text style={styles.flightDetailsCardTextBold}>
                {flight.departing.departTime}
              </Text>
              <Text>{flight.departing.departingAirport}</Text>
            </View>
            <View>
              <Text>&#8594;</Text>
            </View>
            <View>
              <Text style={styles.flightDetailsCardTextBold}>
                {flight.departing.landingTime}
              </Text>
              <Text>{flight.departing.destinationAirport}</Text>
            </View>
            <View></View>
          </View>
          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "center"
            }}
          >
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "left",
                  color: UI_COLORS.Grey
                }}
              >
                {flight.departing.stops} Stop &#183;
                {flight.departing.flightTime} - {flight.departing.company}
              </Text>
            </View>
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardTextBold,
                  textAlign: "right"
                }}
              >
                C${flight.departing.price}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.flightDetailCard}>
          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "center",
              borderBottomColor: UI_COLORS.LightGrey,
              borderBottomWidth: 0.5,
              borderBottomStyle: "solid"
            }}
          >
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "left",
                  color: UI_COLORS.DarkGrey
                }}
              >
                Returning &#183; {flight.returning.date}
              </Text>
            </View>
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "right",
                  color: UI_COLORS.DarkGrey
                }}
              >
                Shortest
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "space-evenly",
              paddingTop: 20
            }}
          >
            <View>
              <Image
                style={styles.flightDetailsCardImage}
                source={{ url: flight.returning.companyLogo }}
              />
            </View>
            <View>
              <Text style={styles.flightDetailsCardTextBold}>
                {flight.returning.departTime}
              </Text>
              <Text>{flight.returning.departingAirport}</Text>
            </View>
            <View>
              <Text>&#8594;</Text>
            </View>
            <View>
              <Text style={styles.flightDetailsCardTextBold}>
                {flight.returning.landingTime}
              </Text>
              <Text>{flight.returning.destinationAirport}</Text>
            </View>
            <View></View>
          </View>
          <View
            style={{
              ...styles.flightDetailsCardRow,
              justifyContent: "center"
            }}
          >
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardText,
                  textAlign: "left",
                  color: UI_COLORS.Grey
                }}
              >
                {flight.returning.stops} Stop &#183;
                {flight.returning.flightTime} - {flight.returning.company}
              </Text>
            </View>
            <View style={styles.flightDetailsCardRowColumn}>
              <Text
                style={{
                  ...styles.flightDetailsCardTextBold,
                  textAlign: "right"
                }}
              >
                C${flight.returning.price}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return <ScrollView horizontal={true}>{flights}</ScrollView>;
};

const mapStateToProps = state => {
  const { FlightReducer } = state;
  return { FlightReducer };
};

const mapDispatchToProps = {
  selectFlight
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightDetailCard);
