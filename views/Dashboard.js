import React from 'react';
import { connect } from 'react-redux';
import { Content, Footer, FooterTab, Button, Icon } from 'native-base';
import PositiveDashboard from './PositiveDashboard';
import NegativeDashboard from './NegativeDashboard';
import Loading from './Loading';

class Dashboard extends React.Component {
  state = {
    selectedTab: 'positive',
    loading: false,
  };
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitle: <Icon name="md-ice-cream" style={{ color: '#ED4337' }} />,
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
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <React.Fragment>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ffffff',
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
