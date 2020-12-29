import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AppBackground from "./AppBackground";
import ArticleWebView from "./ArticleWebView";

function Favourites({ navigation }) {
  return (
    <>
      <Header title={"Favourites"} trackback="yes" navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: AppBackground }}>
        <Button onPress={() => navigation.navigate("Home")} title="Go Home" />
      </View>
    </>
  );
}

export default Favourites;
