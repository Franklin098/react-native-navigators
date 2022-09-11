import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function AlbumsScreen() {
  const {authState, logOut} = useContext(AuthContext);

  return (
    <View>
      <Text>AlbumsScreen</Text>
      {authState.isLoggedIn && <Button onPress={logOut} title="Log Out" />}
    </View>
  );
}
