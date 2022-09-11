import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles, colors} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

//interface Props extends NativeStackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color={colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20, marginLeft: 5}}>
        Navigate with Arguments
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Peter'})
          }>
          <Text style={styles.buttonBigText}>Peter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Luis'})
          }>
          <Text style={styles.buttonBigText}>Luis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
