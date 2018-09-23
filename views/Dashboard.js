import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import { View } from 'react-native';
import PositiveMetrics from './PositiveMetrics';
import NegativeMetrics from './NegativeMetrics';
import PositiveDashboard from './PositiveDashboard';
import NegativeDashboard from './NegativeDashboard';
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
            <PositiveDashboard />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Negative Sentiment</Text>
              </TabHeading>
            }
          >
            <NegativeDashboard />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    negativeNews: state.top5NegativeStories,
  };
};

export default connect(mapStateToProps)(Dashboard);
