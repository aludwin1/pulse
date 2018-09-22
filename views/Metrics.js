import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';

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
        <Text>
          {props.negativePercentage * 100}% N=
          {props.negativeArticles}
        </Text>
        <Text> Negative Coverage </Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>
          {props.positivePercentage * 100}% N=
          {props.positiveArticles}
        </Text>
        <Text> Positive Coverage </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    positiveNews: state.positiveArticles,
    negativeNews: state.negativeArticles,
    negativePercentage: state.negativePercentage,
    positivePercentage: state.positivePercentage,
  };
};

export default connect(mapStateToProps)(Metrics);
