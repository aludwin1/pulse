import React from 'react';
import { View } from 'react-native';
import NegativeMetrics from './NegativeMetrics';
import NegativeNews from './NegativeNews';
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
