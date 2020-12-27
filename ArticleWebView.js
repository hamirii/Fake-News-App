import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import Favourites from "./Favourites";
import { Appbar } from "react-native-paper";
import Header from "./components/Header";
import TopNavBar from "./components/TopNavBar";
import AppBackground from "./AppBackground";
import { WebView } from "react-native-webview";

function ArticleWebView({ navigation, route }) {
  const { url } = route.params;
  return (
    <>
      <Header title={"Fake News"} trackback="yes" navigation={navigation} />
      <WebView source={{ uri: url }} style={{ flex: 1 }} />
    </>
  );
}

export default ArticleWebView;
