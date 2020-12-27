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

const FilmStack = createStackNavigator();

const Film = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text>Film Articles go Here </Text>
  </View>
);

function FilmScreen() {
  return (
    <FilmStack.Navigator>
      <FilmStack.Screen
        name="Film"
        component={Film}
        options={{ headerShown: false }}
      />
    </FilmStack.Navigator>
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

export default FilmScreen;
