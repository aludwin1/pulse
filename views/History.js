import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import {
  removeQuery,
  clearHistory,
  setLastParams,
  setCurrentPage,
} from '../store/reducers/user';
import { fetchArticles } from '../store/reducers/articles';
import Loading from './Loading';

class QueryHistory extends React.Component {
  state = {
    loading: false,
  };

  static navigationOptions = {
    headerLeft: null,
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitle: <Text style={{ alignSelf: 'center' }}>Search History</Text>,
  };

  render() {
    if (this.props.history && !this.props.history.length) {
      return (
        <Text style={{ alignSelf: 'center' }}>You have no past searches!</Text>
      );
    }

    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <ListItem
          title="History"
          titleStyle={{
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
          hideChevron={true}
        />
        {this.props.history.map((query, i) => (
          <ListItem
            rightIcon={{ name: 'close' }}
            title={`Company: ${query.company}`}
            subtitle={`Days: ${query.days}`}
            onPressRightIcon={() => {
              this.props.remove(query);
            }}
            onLongPress={async () => {
              await this.setState({
                loading: true,
              });
              this.props.setLast(query);
              await this.props.fetchArticles(query);
              await this.setState({
                loading: false,
              });
              this.props.setCurrentPage('positive');
            }}
            key={i}
          />
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.user.queries,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: query => {
      dispatch(removeQuery(query));
    },
    clearHistory: () => {
      dispatch(clearHistory());
    },
    fetchArticles: async params => {
      await dispatch(fetchArticles(params));
    },
    setLast: params => {
      dispatch(setLastParams(params));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPage(page));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryHistory);
