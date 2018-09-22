import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';
import Metrics from './Metrics';
import NegativeNews from './NegativeNews';
import PositiveNews from './PositiveNews';

const Dashboard = props => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Metrics />
      <PositiveNews />
      <NegativeNews />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    negativeNews: state.top5NegativeStories,
  };
};

export default connect(mapStateToProps)(Dashboard);
