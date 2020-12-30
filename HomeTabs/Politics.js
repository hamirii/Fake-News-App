import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import AppBackground from "../AppBackground";
import Article from "../components/Article";
import { createStackNavigator } from "@react-navigation/stack";

const PoliticsStack = createStackNavigator();

function Politics({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fake-news-apii.herokuapp.com/apiLib")
      .then((response) => response.json())
      .then((items) => setData(items.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const politics = data.filter((item) => {
    for (let index in data) {
      if (item.category[index] == "politics") {
        return item;
      }
    }
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: AppBackground }}
    >
      <FlatList
        data={politics}
        keyExtractor={({ headline }, index) => headline}
        renderItem={({ item }) => (
          <Article
            headline={item.headline}
            imageLogo={item.imageLogo}
            imageURI={item.imageURI}
            url={item.url}
            navigation={navigation}
          />
        )}
      />
    </ScrollView>
  );
}

function PoliticsScreen() {
  return (
    <PoliticsStack.Navigator>
      <PoliticsStack.Screen
        name="Latest"
        component={Politics}
        options={{ headerShown: false }}
      />
    </PoliticsStack.Navigator>
  );
}

export default PoliticsScreen;
