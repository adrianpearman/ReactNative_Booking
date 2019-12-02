import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  Text
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
// Styles
import { styles } from "./hotelCardStyle";
// Redux Actions
import { selectHotel } from "../../redux/actions/hotelActions";

const HotelDetailCard = props => {
  const hotels = props.HotelReducer.hotelInformation.map((hotel, i) => {
    return (
      <TouchableOpacity
        style={styles.hotelDetailCard}
        key={i}
        onPress={() => props.selectHotel(hotel)}
      >
        <View
          style={{
            borderRadius: 20,
            height: "100%",
            overflow: "hidden"
          }}
        >
          <ImageBackground
            style={styles.hotelImageContainer}
            source={{
              url: hotel.image
            }}
          >
            <LinearGradient
              colors={["rgba(0, 0, 0, 0.10)", "rgba(0, 0, 0, 0.50)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <Text style={styles.hotelImageText}>
                {hotel.rating} &#183; {hotel.ratingText} &#183;{" "}
                {hotel.starRatingNumber} Star Hotel
              </Text>
            </LinearGradient>
          </ImageBackground>
          <View style={{ height: "30%" }}>
            <View style={{ paddingLeft: 15, paddingTop: 10 }}>
              <Text style={styles.hotelNamePrimaryText}>{hotel.name}</Text>
              <Text style={styles.hotelNameSecondaryText}>
                {hotel.description}
              </Text>
            </View>
            <View style={{ padding: 10, flexDirection: "row", marginTop: 40 }}>
              <Text style={styles.hotelNameDescriptionLeft}>
                {hotel.secondaryDescription}
              </Text>
              <Text style={styles.hotelNameDescriptionRight}>
                <Text style={styles.hotelNameDescriptionRightBold}>
                  C${hotel.price}
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
      {hotels}
    </ScrollView>
  );
};

const mapDispathToProps = {
  selectHotel
};

const mapStateToProps = state => {
  const { HotelReducer } = state;
  return { HotelReducer };
};

export default connect(mapStateToProps, mapDispathToProps)(HotelDetailCard);
