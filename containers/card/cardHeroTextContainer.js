import React from "react";
import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable"; //import for the animation of Collapse and Expand
import { Icon } from "react-native-elements";
// Redux
import { connect } from "react-redux";
// Styles
import { styles } from "./cardStyle";
import { UI_COLORS } from "../../styles/colors";

const CardHeroTextContainer = props => {
  // Dictates which backgroundColor to use based on index
  const activeBackgroundColor =
    props.index % 2 === 0
      ? styles.cardHeroTextContainer1
      : styles.cardHeroTextContainer2;
  // Dictates which styling for the fonts
  const activeFont = props.isActive
    ? styles.cardHeroTextContainerTextLarge
    : styles.cardHeroTextContainerTextSmall;
  const activeFontColor = props.isActive
    ? styles.cardHeroTextColorActive
    : styles.cardHeroTextColorInactive;

  const totalHeader = (
    <>
      <Text style={{ ...activeFont, ...activeFontColor, width: "60%" }}>
        {props.title}
      </Text>
      <Text
        style={{
          ...activeFont,
          ...activeFontColor,
          width: "30%",
          textAlign: "right"
        }}
      >
        C$
        {props.UIReducer.flightPrice +
          props.UIReducer.hotelPrice +
          props.UIReducer.carPrice}
      </Text>
      <Text style={{ width: "10%" }}></Text>
    </>
  );
  const standardHeader = (
    <>
      <View style={{ width: "10%" }}>
        <Icon
          color={activeFontColor.color}
          name={props.icon}
          type="font-awesome"
          size={22}
        />
      </View>
      <Text style={{ ...activeFont, ...activeFontColor, width: "20%" }}>
        {props.title}
      </Text>
      <Text
        style={{
          ...styles.cardHeroTextContainerTextSmall,
          width: "30%",
          color: UI_COLORS.DarkGrey
        }}
      >
        {props.duration}
      </Text>
      <Text
        style={{
          ...activeFont,
          ...activeFontColor,
          width: "30%",
          textAlign: "right"
        }}
      >
        C$
        {props.index === 0 ? props.UIReducer.flightPrice : null}
        {props.index === 1 ? props.UIReducer.hotelPrice : null}
        {props.index === 2 ? props.UIReducer.carPrice : null}
      </Text>
      <View style={{ width: "10%" }}>
        <Icon
          color={UI_COLORS.DarkGrey}
          name="ellipsis-v"
          type="font-awesome"
          size={16}
        />
      </View>
    </>
  );

  return (
    <Animatable.View
      duration={400}
      style={{
        ...styles.cardHeroTextContainer,
        ...activeBackgroundColor,
        paddingLeft: 30
      }}
      transition="backgroundColor"
    >
      {props.type !== "Total" ? standardHeader : totalHeader}
    </Animatable.View>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(CardHeroTextContainer);
