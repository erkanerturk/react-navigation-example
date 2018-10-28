import React, { Component } from "react";
import { Text, View } from "react-native";

import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

export class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}

const index = () => {
  return <AppTabNavigator />;
};

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    // Router config
    initialRouteName: "Home",
    order: ["Settings", "Home"],
    // Navigation for complete tab navigator
    navigationOptions: {
      // tabBarVisible: false
    },
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey"
    }
    // Custon component bar
    // tabBarComponent: {}
  }
);

export default index;
