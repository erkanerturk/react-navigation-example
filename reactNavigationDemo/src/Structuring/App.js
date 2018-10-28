import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import createRootNavigator from "./routes";
import LoadingScreen from "./screens/AuthLoadingScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      isCheckedAuth: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("userToken")
      .then(res => this.setState({ isAuth: res, isCheckedAuth: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { isCheckedAuth, isAuth } = this.state;

    if (!isCheckedAuth) {
      return <LoadingScreen />;
    }

    const Layout = createRootNavigator(isAuth);
    return <Layout />;
  }
}
