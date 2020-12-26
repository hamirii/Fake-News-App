import * as React from "react";
import { StyleSheet, Text, View, Button, Dimensions, StatusBar, ScrollView } from "react-native";
import AppBackground from '../AppBackground';
import Article from '../components/Article';


const Sports = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Article headline={"Arsenal to win Premier League in shock Arsene Wenger comeback"} imageURI={
    'https://cdn.newsapi.com.au/image/v1/5ce735885933ff71f6943eb9b4b68c1c'
  } />
    <Article headline={'Lionel Messi joins Cristiano Ronaldo at Juventus, can only play each game with 5 men'} imageURI={
      'https://site-cdn.givemesport.com/images/20/08/29/3eaaeda130429fe4d4e74a34fbbe2291/320.jpg'
    } />
  </ScrollView>
);


export default Sports;
