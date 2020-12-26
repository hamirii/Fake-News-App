import * as React from "react";
import { StyleSheet, Text, View, Button, Dimensions, StatusBar } from "react-native";
import AppBackground from '../AppBackground';


const Sports = () => (
  <View style={styles.container}>
    <Text> Sports Articles go here </Text>
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

export default Sports;
