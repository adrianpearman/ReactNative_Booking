import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Icon } from "react-native-elements";
// Redux
import { connect } from "react-redux";
import { bookMarkToggle } from "../../redux/actions/accordionActions";
// Styles
import { styles } from "./headerStyle.js";
import { UI_COLORS } from "../../styles/colors";

const Header = props => {
  const activeColor = props.AccordionReducer.bookMarked
    ? styles.bookMarkStyleActive
    : styles.bookMarkStyle;

  return (
    <View style={styles.headerContainer}>
      <View style={{ width: "10%", marginRight: 5, textAlign: "center" }}>
        <Icon
          color={UI_COLORS.White}
          name="arrow-left"
          type="font-awesome"
          size={22}
        />
      </View>
      <View style={{ width: "70%", marginLeft: 10 }}>
        <Text style={{ ...styles.headerTextBold }}>
          {props.UserReducer.userInformation.title}
        </Text>
        <Text style={{ ...styles.headerText }}>
          {props.UserReducer.userInformation.departingDate} &#183;
          {props.UserReducer.userInformation.departingTime} /
          {props.UserReducer.userInformation.returningDate} &#183;
          {props.UserReducer.userInformation.returningTime}
        </Text>
        <Text style={{ ...styles.headerText }}>
          {props.UserReducer.userInformation.departingLocation}
          &#8644;
          {props.UserReducer.userInformation.returningLocation}
        </Text>
      </View>
      <View style={{ width: "10%", textAlign: "left" }}>
        <TouchableOpacity
          style={activeColor}
          onPress={() => props.bookMarkToggle()}
        >
          <Icon
            color={UI_COLORS.White}
            name="bookmark"
            type="font-awesome"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispathToProps = {
  bookMarkToggle
};

const mapStateToProps = state => {
  const { UserReducer, AccordionReducer } = state;
  return { UserReducer, AccordionReducer };
};

export default connect(mapStateToProps, mapDispathToProps)(Header);
