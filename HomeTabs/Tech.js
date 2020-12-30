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
import { createStackNavigator } from "@react-navigation/stack";
import Article from "../components/Article";

const TechStack = createStackNavigator();

function Tech({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fake-news-apii.herokuapp.com/apiLib")
      .then((response) => response.json())
      .then((items) => setData(items.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const tech = data.filter((item) => {
    for (let index in data) {
      if (item.category[index] == "tech") {
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
        data={tech}
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

function TechScreen() {
  return (
    <TechStack.Navigator>
      <TechStack.Screen
        name="Tech"
        component={Tech}
        options={{ headerShown: false }}
      />
    </TechStack.Navigator>
  );
}

export default TechScreen;
