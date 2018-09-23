import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Loading = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      }}
    >
      <Icon name="heartbeat" type="font-awesome" color="#f50" size={80} />
      <Text
        style={{
          marginTop: 20,
          marginBottom: 20,
          fontFamily: 'HelveticaNeue-Light',
          fontSize: 30,
        }}
      >
        Taking Pulse...
      </Text>
      <ActivityIndicator size="large" color="#f50" />
    </View>
  );
};

export default Loading;
