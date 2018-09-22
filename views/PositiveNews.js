import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';

const PositiveNews = props => {
  return (
    <View style={{ width: 300 }}>
      <Text>Postive Coverage</Text>
      {props.positiveNews.map((article, i) => (
        <ListItem
          key={i}
          title={article.title}
          subtitle={article.source}
          chevron={false}
          // onPress={() => {
          //   Linking.canOpenURL(article.link)
          //     .then(supported => {
          //       if (!supported) {
          //         console.log("Can't handle url: " + article.link);
          //       } else {
          //         return Linking.openURL(article.link);
          //       }
          //     })
          //     .catch(err => console.error('An error occurred', err));
          // }}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    positiveNews: state.top5PositiveStories,
  };
};

export default connect(mapStateToProps)(PositiveNews);
