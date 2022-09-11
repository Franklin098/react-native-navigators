import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsSreen from '../screens/SettingsSreen';
import {useWindowDimensions} from 'react-native';

// export type RootDrawerParams = {
//   StackNavigator: undefined;
//   SettingsScreen: undefined;
// };

const Drawer = createDrawerNavigator();

export default function BasicLateralMenu() {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
        headerShadowVisible: false,
        headerStyle: {backgroundColor: 'gray'},
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsSreen}
      />
    </Drawer.Navigator>
  );
}
