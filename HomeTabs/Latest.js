import React, { useEffect, useState } from "react";
import {
  ScrollView,
  WebView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Article from "../components/Article";
import { createStackNavigator } from "@react-navigation/stack";

const LatestStack = createStackNavigator();
const PoliticsStack = createStackNavigator();

function Latest({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fake-news-apii.herokuapp.com/latest")
      .then((response) => response.json())
      .then((items) => setData(items.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <FlatList
        data={data}
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

function LatestScreen() {
  return (
    <LatestStack.Navigator>
      <LatestStack.Screen
        name="Latest"
        component={Latest}
        options={{ headerShown: false }}
      />
    </LatestStack.Navigator>
  );
}

export default LatestScreen;
