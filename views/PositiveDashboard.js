import React from 'react';
import { View } from 'react-native';
import PositiveMetrics from './PositiveMetrics';
import PositiveNews from './PositiveNews';

const PositiveDashboard = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <PositiveMetrics />
      <PositiveNews />
    </View>
  );
};

export default PositiveDashboard;
