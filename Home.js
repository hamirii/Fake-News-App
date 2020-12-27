import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React from "react";
import Header from "./components/Header";
import TopNavBar from "./components/TopNavBar";
import AppBackground from "./AppBackground";

function Home({ navigation }) {
  return (
    <>
      <Header title={"Fake News"} trackback="no" />
      <TopNavBar navigation={navigation} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: AppBackground,
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
    backgroundColor: AppBackground,
  },
});

export default Home;
