import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function Tab2Screen() {
  useEffect(() => {
    console.log('Tab2Screen');
  }, []);

  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
}
