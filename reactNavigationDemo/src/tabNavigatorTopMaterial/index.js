import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <AppTabNavigator />
    </SafeAreaView>
  );
};

const AppTabNavigator = createMaterialTopTabNavigator(
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
    // order: ["Settings", "Home", "Profile"],
    tabBarPosition: "bottom",
    // swipeEnabled: false,
    // animationEnabled: false,
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "#f2f2f2",
        borderTopWidth: 0.5,
        borderTopColor: "grey"
      },
      // Tab altındaki çizgi
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: false
    }
  }
);

export default index;
