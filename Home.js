import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import DailyTrivia from "./DailyTrivia";
//import { NavigationBar } from "react-native-navbar";
import { Appbar } from "react-native-paper";
import Header from "./Header";

function Home({ navigation }) {
  return (
    <>
      <Header title={"Fake News"} trackback="no" />
      <View style={styles.container}>
        <Text style={styles.paragraph}>"Welcome!"</Text>
        <Button
          title="Daily Trivia"
          onPress={() => navigation.navigate("DailyTrivia")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#e6ddc5",
    padding: 19,
    textAlign: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  top: {
    backgroundColor: "#e6ddc5",
  },
});

export default Home;
