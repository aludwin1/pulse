import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ProgressCircle } from 'react-native-svg-charts';

const Metrics = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <ProgressCircle
          style={{ height: 200 }}
          progress={Number(props.negativePercentage)}
          progressColor={'rgb(237,67,55)'}
        />
        <Text>
          {props.negativePercentage * 100}% N=
          {props.negativeNews}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    negativeNews: state.negativeArticles,
    negativePercentage: state.negativePercentage,
  };
};

export default connect(mapStateToProps)(Metrics);
