//import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Constants from "expo-constants";
import Home from "./Home";
import Favourites from "./Favourites";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppBackground from './AppBackground';

const Tab = createBottomTabNavigator();

function Routes() {

  return (
    <NavigationContainer>
    
    <Tab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'star' : 'star';
            }

            return <Icon name={iconName} size={size} color = {color} />;
          },
        })} tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          style: {backgroundColor: AppBackground},
        }}>
        <Tab.Screen name='Home' component={Home} icon="Home"/>
        <Tab.Screen name='Favourites' component={Favourites} />
    </Tab.Navigator>
    
    </NavigationContainer>
  );
}

export default Routes;
