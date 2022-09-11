import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonScreen from '../screens/PersonScreen';
import {colors} from '../theme/appTheme';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Page1Screen"
      screenOptions={{
        contentStyle: {backgroundColor: colors.background},
        headerShadowVisible: false,
        headerStyle: {backgroundColor: colors.background},
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Page 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Page 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Page 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
