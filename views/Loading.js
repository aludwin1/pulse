import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { BarIndicator } from 'react-native-indicators';

const Loading = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <BarIndicator size={50} color="#f50" />
    </View>
  );
};

export default Loading;
