import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({title: 'Hello World', headerBackTitle: 'Go Back'});
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};

export default Page2Screen;
