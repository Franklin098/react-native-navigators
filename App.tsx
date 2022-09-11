import 'react-native-gesture-handler';
import React from 'react';
import StackNavigator from './src/navigator/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import BasicLateralMenu from './src/navigator/BasicLateralMenu';
import LateralMenu from './src/navigator/LateralMenu copy';
import {LogBox} from 'react-native';
import Tabs from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <BasicLateralMenu /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
