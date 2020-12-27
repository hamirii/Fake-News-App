import { Appbar } from "react-native-paper";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Favourites from "../Favourites";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "../components/Header";
import AppBackground from "../AppBackground";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LatestScreen from "../HomeTabs/Latest";
import SportsScreen from "../HomeTabs/Sports";
import PoliticsScreen from "../HomeTabs/Politics";
import FilmScreen from "../HomeTabs/Film";
import TechScreen from "../HomeTabs/Tech";

const initialLayout = { width: Dimensions.get("window").width };

const windowWidth = Dimensions.get("window").width;

const Tab = createMaterialTopTabNavigator();

function TopNavBar({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: AppBackground },
        scrollEnabled: "true",
        tabStyle: { width: windowWidth * 0.25 },
        indicatorStyle: {
          backgroundColor: "red",
          width: windowWidth * 0.2,
          marginLeft: 10,
        },
      }}
    >
      <Tab.Screen name="Latest" component={LatestScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
      <Tab.Screen name="Politics" component={PoliticsScreen} />
      <Tab.Screen name="Film" component={FilmScreen} />
      <Tab.Screen name="Tech" component={TechScreen} />
    </Tab.Navigator>
  );
}

export default TopNavBar;
