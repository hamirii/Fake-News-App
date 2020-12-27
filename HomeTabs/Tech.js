import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
} from "react-native";
import AppBackground from "../AppBackground";
import { createStackNavigator } from "@react-navigation/stack";

const TechStack = createStackNavigator();

const Tech = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text> Tech Articles go here </Text>
  </View>
);

function TechScreen() {
  return (
    <TechStack.Navigator>
      <TechStack.Screen
        name="Tech"
        component={Tech}
        options={{ headerShown: false }}
      />
    </TechStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: AppBackground,
    padding: 19,
    textAlign: "center",
  },
});

export default TechScreen;
