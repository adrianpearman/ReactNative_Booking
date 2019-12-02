import { StyleSheet } from "react-native";
import { UI_COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  // Content Containers
  headerContainer: {
    flexDirection: "row"
  },
  // Text Styling
  headerTextBackButton: {
    fontFamily: "Roboto",
    color: UI_COLORS.White,
    fontSize: 24
  },
  headerTextBold: {
    fontFamily: "Roboto-Bold",
    color: UI_COLORS.White,
    fontSize: 18,
    marginBottom: 8
  },
  headerText: {
    fontFamily: "Roboto-Medium",
    color: UI_COLORS.White,
    fontSize: 14,
    marginBottom: 8
  },
  bookMarkStyle: {
    backgroundColor: "transparent",
    width: 45,
    height: 45,
    padding: 12,
    borderRadius: 90
  },
  bookMarkStyleActive: {
    backgroundColor: UI_COLORS.Orange,
    width: 45,
    height: 45,
    padding: 12,
    borderRadius: 90
  }
});

export { styles };
