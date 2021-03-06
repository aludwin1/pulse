import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ProgressCircle } from 'react-native-svg-charts';

class Metrics extends React.Component {
  render() {
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
            progress={Number(this.props.positivePercentage)}
            progressColor={'rgb(192,216,144)'}
          />
          <Text
            style={{
              alignSelf: 'center',
              position: 'relative',
              bottom: 123,
              fontSize: 30,
            }}
          >
            {Math.floor(this.props.positivePercentage * 100)}
            %*
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              position: 'relative',
              bottom: 123,
            }}
          >
            N=
            {this.props.positiveNews}
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    positiveNews: state.articles.positiveArticles,
    positivePercentage: state.articles.positivePercentage,
  };
};

export default connect(mapStateToProps)(Metrics);
