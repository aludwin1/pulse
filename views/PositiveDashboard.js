import React from 'react';
import { View, Text } from 'react-native';
import PositiveMetrics from './PositiveMetrics';
import PositiveNews from './PositiveNews';
import { connect } from 'react-redux';

const PositiveDashboard = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <PositiveMetrics />
      <Text
        style={{
          alignSelf: 'center',
          width: 280,
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 20,
          fontSize: 15,
          color: 'grey',
        }}
      >
        Top 5 Positive Articles by LinkedIn Shares
      </Text>
      <PositiveNews />
      <Text
        style={{
          alignSelf: 'center',
          width: 280,
          textAlign: 'center',
          marginTop: 20,
          color: 'grey',
        }}
      >
        *Percentage of coverage tagged positive or negative (excludes neutral)
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    lastParams: state.user.lastParams,
  };
};
export default connect(mapStateToProps)(PositiveDashboard);
