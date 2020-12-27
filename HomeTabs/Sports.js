import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import AppBackground from "../AppBackground";
import Article from "../components/Article";
import { createStackNavigator } from "@react-navigation/stack";

const SportsStack = createStackNavigator();

const Sports = ({ route, navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Article
      headline={"Arsenal to win Premier League in shock Arsene Wenger comeback"}
      imageURI={
        "https://cdn.newsapi.com.au/image/v1/5ce735885933ff71f6943eb9b4b68c1c"
      }
      imageLogo={require("../assets/BBC-logo.png")}
      navigation={navigation}
      url={"https://www.bbc.com/sport/football/55382725"}
    />
    <Article
      headline={
        "Lionel Messi joins Cristiano Ronaldo at Juventus, can only play each game with 5 men"
      }
      imageURI={
        "https://site-cdn.givemesport.com/images/20/08/29/3eaaeda130429fe4d4e74a34fbbe2291/320.jpg"
      }
    />
  </ScrollView>
);

function SportsScreen() {
  return (
    <SportsStack.Navigator>
      <SportsStack.Screen
        name="Latest"
        component={Sports}
        options={{ headerShown: false }}
      />
    </SportsStack.Navigator>
  );
}

export default SportsScreen;
