import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Go Back" onPress={() => navigation.pop()} />
      <Button title="Go to Page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
