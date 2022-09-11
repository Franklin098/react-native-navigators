import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SettingsSreen() {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top + 20, ...styles.globalMargin}}>
      <Text style={styles.title}>SettingsSreen</Text>
      <Text>{JSON.stringify(authState)}</Text>
      {authState.favoriteIcon && (
        <Icon
          style={{marginTop: 40}}
          name={authState.favoriteIcon}
          size={150}
          color={colors.primary}
        />
      )}
    </View>
  );
}
