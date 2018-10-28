import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import StackNavigatorDemo from "./stackNavigator";
import TabNavigatorDemo from "./tabNavigator";
import TabNavigatorBottomMaterialDemo from "./tabNavigatorBottomMaterial";
import TabNavigatorTopMaterialDemo from "./tabNavigatorTopMaterial";
import DrawerNavigationDemo from "./drawerNavigation";

export default class App extends Component {
  render() {
    // return <StackNavigatorDemo />;
    // return <TabNavigatorDemo />;
    // return <TabNavigatorBottomMaterialDemo />;
    return <TabNavigatorTopMaterialDemo />;
    // return <DrawerNavigationDemo />;
  }
}
