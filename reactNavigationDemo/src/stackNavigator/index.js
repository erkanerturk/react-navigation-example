import React from "react";

import { createStackNavigator } from "react-navigation";

import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const index = () => {
  return <AppStackNavigator />;
};

const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
});

export default index;
