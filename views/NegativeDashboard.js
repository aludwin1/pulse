import React from 'react';
import { View } from 'react-native';
import NegativeMetrics from './PositiveMetrics';
import NegativeNews from './PositiveNews';
import { connect } from 'react-redux';

class NegativeDashboard extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <NegativeMetrics />
        <NegativeNews />
      </View>
    );
  }
}

export default connect()(NegativeDashboard);
