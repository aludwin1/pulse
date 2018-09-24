import React from 'react';
import { connect } from 'react-redux';
import { Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import PositiveDashboard from './PositiveDashboard';
import NegativeDashboard from './NegativeDashboard';
import { fetchArticles } from '../store/reducers/articles';
import { setCurrentPage } from '../store/reducers/user';
import Loading from './Loading';
import QueryHistory from './History';

class Dashboard extends React.Component {
  state = {
    loading: false,
  };
  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitle: <Icon name="ios-pulse" style={{ color: '#ED4337' }} />,
  };

  renderSelectedTab() {
    switch (this.props.currentPage) {
      case 'negative':
        return <NegativeDashboard />;
      case 'positive':
        return <PositiveDashboard />;
      case 'history':
        return <QueryHistory />;
      default:
        return <PositiveDashboard />;
    }
  }

  async handleSubmit() {
    try {
      await this.setState({
        loading: true,
      });
      await this.props.getData(this.state);
      this.setState({
        loading: false,
      });
    } catch (err) {
      console.log(err);
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
              active={this.props.currentPage === 'positive'}
              onPress={() => this.props.setCurrentPage('positive')}
            >
              Positive
              <Icon name="md-happy" />
            </Button>
            <Button
              active={this.props.currentPage === 'negative'}
              onPress={() => this.props.setCurrentPage('negative')}
            >
              Negative
              <Icon name="md-sad" />
            </Button>
            <Button
              active={this.props.currentPage === 'search'}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
            >
              Search
              <Icon name="ios-search" />
            </Button>
            <Button
              onPress={async () => {
                await this.setState({
                  loading: true,
                });
                await this.props.getData(this.props.lastParams);
                this.setState({
                  loading: false,
                });
              }}
            >
              Search
              <Icon name="md-refresh" />
            </Button>
            <Button
              active={this.props.currentPage === 'history'}
              onPress={() => this.props.setCurrentPage('history')}
            >
              Search
              <Icon name="ios-book" />
            </Button>
          </FooterTab>
        </Footer>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: async state => {
      await dispatch(fetchArticles(state));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPage(page));
    },
  };
};

const mapStateToProps = state => {
  return {
    lastParams: state.user.lastParams,
    currentPage: state.user.currentPage,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
