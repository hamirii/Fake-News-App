import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AppBackground from "./AppBackground";

function Favourites({navigation}) {
  return (
    <>
    <Header title={"Favourites"} trackback = "yes" navigation={navigation} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: AppBackground }}>
      <Text>Favourites</Text>
      <Button
        onPress={() =>
          navigation.navigate('Home')
        }
        title="Go Home"
      />
    </View>
    </>
  );
}


export default Favourites;