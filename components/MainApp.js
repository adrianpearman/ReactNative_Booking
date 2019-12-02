// Dependancies
import React from "react";
import { Text, View, TouchableOpacity } from "react-native"; //import basic react native components;
import Accordion from "react-native-collapsible/Accordion"; //import for the Accordion view
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

// Redux
import { connect } from "react-redux";
// Redux Actions
import {
  activeSectionToggle,
  bookMarkToggle,
  fontLoadedToggle
} from "../redux/actions/accordionActions";
import { fetchData } from "../redux/actions/appActions";
import { setCar } from "../redux/actions/carActions";
import { setFlight } from "../redux/actions/flightActions";
import { setHotel } from "../redux/actions/hotelActions";
import { fetchUserInformation } from "../redux/actions/userActions";
// Components
import Header from "./header/header";
import CardHeroTextContainer from "../containers/card/cardHeroTextContainer";
import FlightCard from "./flightCard/flightCard";
import HotelCard from "./hotelCard/hotelCard";
import CarCard from "./carCard/carCard";
// Imported Styles
import { styles } from "../styles/styles.js";
import { UI_COLORS } from "../styles/colors";

class MainApp extends React.Component {
  // Life Cycle Method to Download Assets
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf")
    });

    this.props.fetchData();
    this.props.fetchUserInformation();
    this.props.fontLoadedToggle();
    this.props.setCar();
    this.props.setFlight();
    this.props.setHotel();
  }

  //Setting up a active section state
  setSections = sections => {
    // UI Logic to prevent the 'Totals' tab from opening full height
    if (sections[0] === this.props.UIReducer.tabContent.length - 1) {
      this.props.activeSectionToggle([0]);
    } else {
      this.props.activeSectionToggle(
        sections.includes(undefined) ? [0] : sections
      );
    }
  };

  //Accordion Header view
  renderHeader = (section, i, isActive) => {
    return (
      <CardHeroTextContainer
        type={section.type}
        title={section.title.type}
        duration={section.title.duration}
        price={section.title.price}
        icon={section.title.icon}
        isActive={isActive}
        index={i}
      />
    );
  };

  //Accordion Content view
  renderContent(section, i, isActive) {
    if (section.type === "Flight") {
      return <FlightCard index={i} />;
    } else if (section.type === "Hotel") {
      return <HotelCard index={i} />;
    } else if (section.type === "Car") {
      return <CarCard index={i} />;
    } else {
      return <></>;
    }
  }

  render() {
    if (this.props.AccordionReducer.fontLoaded) {
      return (
        <>
          <LinearGradient
            colors={[UI_COLORS.TurqoiseLight, UI_COLORS.TurqoiseDark]}
            start={[0.1, 1]}
            style={styles.mainContainer}
          >
            <Header />
          </LinearGradient>
          <View style={{ marginTop: -20 }}>
            <Accordion
              activeSections={this.props.AccordionReducer.activeSections} //for any default active section
              sections={this.props.UIReducer.tabContent} //title and content of accordion
              touchableComponent={TouchableOpacity}
              renderHeader={this.renderHeader} //Header Component(View) to render
              renderContent={this.renderContent} //Content Component(View) to render
              duration={200} //Duration for Collapse and expand
              onChange={this.setSections} //setting the state of active sections
            />
          </View>
        </>
      );
    } else {
      return (
        <>
          <LinearGradient
            colors={[UI_COLORS.TurqoiseLight, UI_COLORS.TurqoiseDark]}
            start={[0.1, 1]}
            style={styles.loadingContainer}
          >
            <Text>LOADING...</Text>
          </LinearGradient>
        </>
      );
    }
  }
}

const mapDispatchToProps = {
  activeSectionToggle,
  bookMarkToggle,
  fetchData,
  fetchUserInformation,
  fontLoadedToggle,
  setCar,
  setFlight,
  setHotel
};

const mapStateToProps = state => {
  const { UIReducer, AccordionReducer } = state;
  return { UIReducer, AccordionReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
