import React from 'react';
import { connect } from 'react-redux';
import { Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { View } from 'react-native';
import PositiveMetrics from './PositiveMetrics';
import NegativeMetrics from './NegativeMetrics';
import PositiveDashboard from './PositiveDashboard';
import NegativeDashboard from './NegativeDashboard';
import Search from './App.js';
import NegativeNews from './NegativeNews';
import PositiveNews from './PositiveNews';

class Dashboard extends React.Component {
  state = {
    selectedTab: 'positive',
  };
  static navigationOptions = {
    header: null,
  };

  renderSelectedTab() {
    switch (this.state.selectedTab) {
      case 'negative':
        return <NegativeDashboard />;
      case 'positive':
        return <PositiveDashboard />;
      default:
        return <PositiveDashboard />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Content
          style={{
            position: 'relative',
            top: 50,
          }}
        >
          {this.renderSelectedTab()}
        </Content>

        <Footer>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'positive'}
              onPress={() => this.setState({ selectedTab: 'positive' })}
            >
              Positive
              <Icon name="md-happy" />
            </Button>
            <Button
              active={this.state.selectedTab === 'negative'}
              onPress={() => this.setState({ selectedTab: 'negative' })}
            >
              Negative
              <Icon name="md-sad" />
            </Button>
            <Button
              active={this.state.selectedTab === 'search'}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            >
              Search
              <Icon name="ios-search" />
            </Button>
          </FooterTab>
        </Footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    negativeNews: state.top5NegativeStories,
  };
};

export default connect(mapStateToProps)(Dashboard);
