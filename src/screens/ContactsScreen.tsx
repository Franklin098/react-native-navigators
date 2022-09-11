import {View, Text, Button} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export default function ContactsScreen() {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
}
