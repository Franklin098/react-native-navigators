import {Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from '../theme/appTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {Route} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonScreen'> {}

const PersonScreen = ({route, navigation}: Props) => {
  //const params = route.params as RouterParams;
  const params = route.params;
  console.log(JSON.stringify(params));

  const {changeUserName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({title: params.name});
  }, []);

  // React Best Practices : Use a new useEffect for every task
  useEffect(() => {
    changeUserName(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonScreen;
