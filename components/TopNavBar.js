import { Appbar } from "react-native-paper";
import * as React from "react";
import { StyleSheet, Text, View, Button, Dimensions, StatusBar } from "react-native";
import DailyTrivia from "../DailyTrivia";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../components/Header';
import AppBackground from '../AppBackground';


const initialLayout = { width: Dimensions.get('window').width };

const windowWidth = Dimensions.get('window').width;

function render_label({route}){
  return(
    <View>
    <Text style={{}}>{route.title}</Text>
    </View>
  );
}

function TopNavBar({navigation, state, scene}){

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(state);

  const renderScene = SceneMap(scene);

  const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled={true}
    tabStyle={{width: .25*windowWidth}}
    indicatorStyle={{ backgroundColor: 'red' }}
    style={{ backgroundColor: AppBackground}}
    renderLabel = {render_label}
  />
);

  return(
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      />
  );
}

export default TopNavBar;
