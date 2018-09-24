import React from 'react';
import { View, Text } from 'react-native';
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
          Top 5 Negative Articles by LinkedIn Shares
        </Text>
        <NegativeNews />
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
  }
}

const mapStateToProps = state => {
  return {
    lastParams: state.user.lastParams,
  };
};

export default connect(mapStateToProps)(NegativeDashboard);
