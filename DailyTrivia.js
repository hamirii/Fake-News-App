import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AppBackground from "./AppBackground";

function DailyTrivia({navigation}) {
  return (
    <>
    <Header title={"Daily Trivia"} trackback = "yes" navigation={navigation} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppBackground }}>
      <Text>Daily Trivia</Text>
    </View>
    </>
  );
}


export default DailyTrivia;