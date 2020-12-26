import * as React from "react";
import { ScrollView } from "react-native";
import Article from '../components/Article';

function Latest() {
  return(
  <ScrollView showsVerticalScrollIndicator={false}>
  <Article headline={"Arsenal to win Premier League in shock Arsene Wenger comeback"} imageURI={
    'https://cdn.newsapi.com.au/image/v1/5ce735885933ff71f6943eb9b4b68c1c'
  } />
  <Article headline={"Whole Foods wins Nobel Prize for solving Climate Change with $60 Dijon Mustard products"} imageURI={
    'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/content/15/e7/47c9886840b299bd24b6e48fca6e/7.Certified-Organic-Grocery-Store_2280x1282._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg'
  } />
  <Article headline={"Fish Fingers, as it turns out, are not made from real fish"} imageURI={
    'https://www.irishtimes.com/polopoly_fs/1.3696142.1542101165!/image/image.jpg'
  } />
  </ScrollView>
  );
}

export default Latest;
