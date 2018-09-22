import React from 'react';
import { View, StyleSheet, Text, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Button } from 'react-native-elements';

const NegativeNews = props => {
  return (
    <View style={{ width: 300, alignSelf: 'center' }}>
      {props.negativeNews.map((article, i) => (
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
    negativeNews: state.top5NegativeStories,
  };
};

export default connect(mapStateToProps)(NegativeNews);
