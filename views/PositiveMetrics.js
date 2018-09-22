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
          progress={Number(props.positivePercentage)}
          progressColor={'rgb(192,216,144)'}
        />
        <Text>
          {props.positivePercentage * 100}% N=
          {props.positiveNews}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    positiveNews: state.positiveArticles,
    positivePercentage: state.positivePercentage,
  };
};

export default connect(mapStateToProps)(Metrics);
