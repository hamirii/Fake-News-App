import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function DailyTrivia({ navigation }) {
  return (
    <>
      <Header title={"Daily Trivia"} trackback="yes" navigation={navigation} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e6ddc5",
        }}
      >
        <Text>Daily Trivia</Text>
      </View>
    </>
  );
}

export default DailyTrivia;
