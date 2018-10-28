import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";

import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Button,
  Title
} from "native-base";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="md-menu"
                size={24}
                onPress={() => this.props.navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 20 }}>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="md-search" size={24} />
            </Button>
            <Button transparent>
              <Icon name="md-heart" size={24} />
            </Button>
            <Button transparent>
              <Icon name="md-more" size={24} />
            </Button>
          </Right>
        </Header>
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
      </Container>
    );
  }
}

export class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.drawerHeader}>
      <Image source={require("../logo-bv.png")} style={styles.drawerImage} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const index = () => {
  return <AppDrawerNavigator />;
};

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: "Home Screen",
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: WIDTH * 0.8,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "orange"
    }
  }
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  drawerHeader: {
    marginBottom: 30,
    backgroundColor: "white",
    alignSelf: "center"
  },
  drawerImage: {
    height: 120,
    width: 120,
    borderRadius: 60
  }
});

export default index;
