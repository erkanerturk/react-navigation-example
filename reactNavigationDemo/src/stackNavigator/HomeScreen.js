import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomeScreen</Text>
        <Button
          title="Go back to Login"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default HomeScreen;
