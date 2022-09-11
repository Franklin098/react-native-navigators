import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsSreen from '../screens/SettingsSreen';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {colors, styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// export type RootDrawerParams = {
//   StackNavigator: undefined;
//   SettingsScreen: undefined;
// };

const Drawer = createDrawerNavigator();

export default function LateralMenu() {
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
      }}
      drawerContent={props => <IntermalMenu {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsSreen}
      />
    </Drawer.Navigator>
  );
}

const IntermalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Avatar*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
          }}
          style={styles.avatar}
        />
      </View>
      {/**Options */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="logo-stackoverflow" size={25} color={colors.primary} />
          <Text style={styles.menuText}>Navigation Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={25} color={colors.primary} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
