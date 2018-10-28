import React, { Component } from "react";
import { Text, View } from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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

export class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
}

const index = () => {
  return <AppTabNavigator />;
};

const AppTabNavigator = createMaterialBottomTabNavigator(
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
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["Settings", "Home", "Profile"],
    activeTintColor: "orange",
    // Animasyon
    shifting: true,
    barStyle: {
      backgroundColor: "#fff"
    }
    // navigationOptions: {
    //   activeTintColor: "orange",
    //   inactiveTintColor: "grey",
    //   tabBarColor: "#fff"
    // }
  }
);

export default index;
