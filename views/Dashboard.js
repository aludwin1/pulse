import React from 'react';
// import { View, StyleSheet, Modal, Linking } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
} from 'native-base';
import { View } from 'react-native';
import PositiveMetrics from './PositiveMetrics';
import NegativeMetrics from './NegativeMetrics';
import NegativeNews from './NegativeNews';
import PositiveNews from './PositiveNews';

class Dashboard extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab
            heading={
              <TabHeading>
                <Text>Positive Sentiment</Text>
              </TabHeading>
            }
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <PositiveMetrics />
              <PositiveNews />
            </View>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Negative Sentiment</Text>
              </TabHeading>
            }
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <NegativeMetrics />
              <NegativeNews />
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

{
  /* <Metrics /> */
}

const mapStateToProps = state => {
  return {
    negativeNews: state.top5NegativeStories,
  };
};

export default connect(mapStateToProps)(Dashboard);
