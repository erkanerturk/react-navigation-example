import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
/**
 * createSwitchNavigator - Only Show ONE SCREEN/STACK at one time
 *  1. Loading Screen
 *  2. Authentication StackNavigator
 *    - Auth Welcome Screen
 *    - SignIn Screen
 *    - Sign Up Screen
 *  3. AppDrawerNavigator
 *    - App StackNavigator (to give a common header to the tabs)
 *       - App TabNavigator
 *         - Home Tab
 *         - Settings Tab
 */

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "HOME",
      tabBarIcon: () => <Icon name="ios-home" size={24} />
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: "SETTINGS",
      tabBarIcon: () => <Icon name="ios-settings" size={24} />
    }
  }
});

AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;
  return {
    headerTitle
    // header: null
  };
};

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Your App",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

// export default createSwitchNavigator({
//   AuthLoading: AuthLoadingScreen,
//   Auth: AuthStackNavigator,
//   App: AppDrawerNavigator
// });

export default (createRootNavigator = (isAuth = false) => {
  return createSwitchNavigator(
    {
      Auth: AuthStackNavigator,
      App: AppDrawerNavigator
    },
    {
      initialRouteName: isAuth ? "App" : "Auth"
    }
  );
});
