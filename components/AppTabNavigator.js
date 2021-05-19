import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import ReportProblem from '../screens/ReportProblem';
import SettingScreen from '../screens/SettingScreen';

export const AppTabNavigator = createBottomTabNavigator({
   Home: {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Home.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  Record: {
    screen: ReportProblem, 
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Record.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Record",
    }
  },
  Chat: {
    screen: ReportProblem,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Chat.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Chat",
    }
  },
  Profile: {
    screen: SettingScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/Profile.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "My Profile",
    }
  },
});
