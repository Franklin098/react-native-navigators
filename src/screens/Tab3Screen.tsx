import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function Tab3Screen() {
  useEffect(() => {
    console.log('Tab3Screen');
  }, []);

  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
}
