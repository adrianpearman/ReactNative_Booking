// Dependancies
import React from "react";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store/store";
// Components
import MainApp from "./components/MainApp";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

export default App;
