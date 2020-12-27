//import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Constants from "expo-constants";
import Home from "./Home";
import Favourites from "./Favourites";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import AppBackground from "./AppBackground";
import ArticleWebView from "./ArticleWebView";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavouritesStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "Home!", headerShown: false }}
      />
      <HomeStack.Screen
        name="ArticleWebView"
        component={ArticleWebView}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

function FavouritesScreen() {
  return (
    <FavouritesStack.Navigator>
      <FavouritesStack.Screen
        name="Favourites"
        component={Favourites}
        options={{ tabBarLabel: "Favourites", headerShown: false }}
      />
    </FavouritesStack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Favourites") {
              iconName = focused ? "star" : "star";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
          style: { backgroundColor: AppBackground },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
