import * as React from "react";
import { StyleSheet, Text, View, Button, Dimensions, StatusBar } from "react-native";
import AppBackground from '../AppBackground';


const Film = () => (
  <View style={styles.container}>
    <Text>Film Articles go Here </Text>
  </View>
);

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

export default Film;