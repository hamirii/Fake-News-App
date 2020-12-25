import { Appbar } from "react-native-paper";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
} from "react-native";
import DailyTrivia from "./DailyTrivia";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Header from "./Header";

const FirstRoute = () => (
  <View style={styles.container}>
    <Button title="Daily Trivia" />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#e6ddc5" }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#e6ddc5" }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#e6ddc5" }} />
);

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#e6ddc5" }} />
);

const initialLayout = { width: Dimensions.get("window").width };

const windowWidth = Dimensions.get("window").width;

function render_label({ route }) {
  return (
    <View>
      <Text style={{}}>{route.title}</Text>
    </View>
  );
}

function TopNavBar({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "latest", title: "Latest" },
    { key: "sports", title: "Sports" },
    { key: "politics", title: "Politics" },
    { key: "film", title: "Film" },
    { key: "tech", title: "Tech" },
  ]);

  const renderScene = SceneMap({
    latest: FirstRoute,
    sports: SecondRoute,
    politics: ThirdRoute,
    film: FourthRoute,
    tech: FifthRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      tabStyle={{ width: 0.25 * windowWidth }}
      indicatorStyle={{ backgroundColor: "red" }}
      style={{ backgroundColor: "#e6ddc5" }}
      renderLabel={render_label}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#e6ddc5",
    padding: 19,
    textAlign: "center",
  },
});

export default TopNavBar;
