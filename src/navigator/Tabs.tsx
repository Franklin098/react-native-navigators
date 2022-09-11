import {View, Text, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import {colors} from '../theme/appTheme';
import TopTabNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Tabs() {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
}

const BottonTabIOS = createBottomTabNavigator();
const BottonTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottonTabAndroid.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'aperture-outline';
              break;
            case 'Tab2Screen':
              iconName = 'stop-circle-outline';
              break;
            case 'StackNavigator':
              iconName = 'logo-stackoverflow';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        options={{
          title: 'Tab2',
        }}
        component={TopTabNavigator}
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{
          title: 'Tab3',
        }}
        component={StackNavigator}
      />
    </BottonTabAndroid.Navigator>
  );
}

function TabsIOS() {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: colors.background,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'aperture-outline';
              break;
            case 'Tab2Screen':
              iconName = 'stop-circle-outline';
              break;
            case 'StackNavigator':
              iconName = 'logo-stackoverflow';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}></Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{
          title: 'Tab2',
        }}
        component={TopTabNavigator}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Tab3',
        }}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
}
