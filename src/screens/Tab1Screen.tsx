import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

export default function Tab1Screen() {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="attach-outline" />
      </Text>
    </View>
  );
}
