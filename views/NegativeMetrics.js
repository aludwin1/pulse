import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ProgressCircle } from 'react-native-svg-charts';

const Metrics = props => {
  return (
    <View>
      <ProgressCircle
        style={{ height: 200 }}
        progress={Number(props.negativePercentage)}
        progressColor={'rgb(237,67,55)'}
      />
      <Text
        style={{
          alignSelf: 'center',
          position: 'relative',
          bottom: 123,
          fontSize: 30,
        }}
      >
        {props.negativePercentage * 100}%
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          position: 'relative',
          bottom: 123,
        }}
      >
        N=
        {props.negativeNews}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    negativeNews: state.articles.negativeArticles,
    negativePercentage: state.articles.negativePercentage,
  };
};

export default connect(mapStateToProps)(Metrics);
