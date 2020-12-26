import { StyleSheet, Text, View, Button } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import DailyTrivia from "./DailyTrivia"
import { Appbar } from "react-native-paper";
import Header from "./components/Header";
import TopNavBar from "./components/TopNavBar";
import AppBackground from "./AppBackground";

// importing Home Tabs from the Home Tabs Folder
import Latest from './HomeTabs/Latest';
import Sports from './HomeTabs/Sports';
import Politics from './HomeTabs/Politics';
import Film from './HomeTabs/Film';
import Tech from './HomeTabs/Tech';

const state = [
    { key: 'latest', title: 'Latest' },
    { key: 'sports', title: 'Sports' },
    { key: 'politics', title: 'Politics' },
    { key: 'film', title: 'Film' },
    { key: 'tech', title: 'Tech' },
  ];

const scene = {
    latest: Latest,
    sports: Sports,
    politics: Politics,
    film: Film,
    tech: Tech,
  };

function Home({ navigation }) {
  return (
    <>
    <Header title={"Fake News"} trackback="no"/>
    <TopNavBar state={state} scene={scene} />
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
    backgroundColor: AppBackground

  },
});

export default Home;