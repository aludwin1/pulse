import React from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { fetchArticles } from '../store/reducers/articles';
import { setLastParams, saveQuery } from '../store/reducers/user';
import { FormInput, FormLabel, Button, Slider } from 'react-native-elements';
import { Icon } from 'native-base';
import Dashboard from './Dashboard';
import { createStackNavigator } from 'react-navigation';
import Loading from './Loading';
import QueryHistory from './History';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      days: '',
      company: '',
      loading: false,
      disabled: true,
    };
  }

  static navigationOptions = {
    header: null,
  };

  async handleSubmit() {
    try {
      await this.setState({
        loading: true,
      });
      await this.props.getData({
        days: String(Math.floor(Number(this.state.days))),
        company: this.state.company,
      });
      this.props.setLast({
        days: String(Math.floor(Number(this.state.days))),
        company: this.state.company,
      });
      this.props.storeQuery({
        days: String(Math.floor(Number(this.state.days))),
        company: this.state.company,
      });
      this.setState({
        loading: false,
        company: '',
        days: '',
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
      <View
        style={{
          padding: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          backgroundColor: '#ffffff',
        }}
      >
        <View style={{ paddingBottom: 25 }}>
          <Icon
            name="ios-pulse"
            style={{
              color: '#ED4337',
              fontSize: 80,
              alignSelf: 'center',
            }}
          />
        </View>
        <FormLabel>Company</FormLabel>
        <FormInput
          onChangeText={text => {
            console.log(this.state.company);
            this.setState({
              company: text,
            });
          }}
          style={{ height: 40 }}
          value={this.state.company}
        />
        <FormLabel>Time Window (in days)</FormLabel>
        <FormInput
          onChangeText={text => {
            console.log(this.state.days);
            this.setState({
              days: text,
            });
          }}
          value={this.state.days}
        />
        <Button
          style={{ paddingTop: 10 }}
          raised
          title="GET PULSE"
          onPressIn={async () => {
            await this.handleSubmit();
            this.props.navigation.navigate('Data');
          }}
          backgroundColor="#3A3A4A"
          disabled={
            isNaN(this.state.days) ||
            Number(this.state.days) < 1 ||
            this.state.company.split(' ').length > 1
          }
        />
        {this.props.top5NegativeStories &&
        this.props.top5NegativeStories.length > 0 ? (
          <Button
            style={{ paddingTop: 10 }}
            raised
            title="VIEW LAST PULSE"
            onPressIn={() => {
              this.props.navigation.navigate('Data');
            }}
            backgroundColor="#ED4337"
          />
        ) : null}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: async state => {
      await dispatch(fetchArticles(state));
    },
    setLast: state => {
      dispatch(setLastParams(state));
    },
    storeQuery: query => {
      dispatch(saveQuery(query));
    },
  };
};

const mapStateToProps = state => {
  return {
    top5NegativeStories: state.articles.top5NegativeStories,
  };
};

export default createStackNavigator({
  Home: {
    screen: connect(
      mapStateToProps,
      mapDispatchToProps
    )(App),
  },
  Data: {
    screen: Dashboard,
  },
  History: {
    screen: QueryHistory,
  },
});

/* {
  top5NegativeStories: [
    {
      title:
        "IBM Has Patented a Coffee Delivery Drone that Knows When You're Tired",
      link:
        'https://munchies.vice.com/en_us/article/8xb3px/ibm-has-patented-a-coffee-delivery-drone-that-knows-when-youre-tired',
      source: 'Vice',
    },
    {
      title:
        'IBM drone would know when you’re tired — and deliver coffee right to you',
      link:
        'http://feeds.orlandosentinel.com/~r/orlandosentinel/news/~3/itHxl0b_daA/fl-reg-coffee-drone-patent-20180823-story.html',
      source: 'Orlando Sentinel',
    },
    {
      title:
        'Day to Day Repair and Maintenance of Water Supply System of Pipe Line, Including Operation and Maintenance of Booster Pump of Water Supply to Sub Station Colony, Ibm Colony, Bandh Colony and Bandh Basti under Kathara Washery',
      link: '',
      source: 'Tenders Monitor Africa-Asia',
    },
    {
      title:
        'IBM Laid Off 20K Older Americans, Sought to Import 37K of Foreign Workers',
      link: 'http://feedproxy.google.com/~r/breitbart/~3/_c8PYCcDWiE/',
      source: 'Breitbart',
    },
    {
      title: 'IBM Identifies Ongoing FIN6 Attacks Against PoS Targets',
      link:
        'http://www.eweek.com/security/ibm-identifies-ongoing-fin6-attacks-against-pos-targets',
      source: 'eWeek',
    },
  ],
  top5PositiveStories: [
    {
      title:
        'A Cheap Valuation and Strong Dividend Make IBM Stock Worth the Wait',
      link:
        'http://articlefeeds.nasdaq.com/~r/nasdaq/symbols/~3/1Es6k0pBidM/a-cheap-valuation-and-strong-dividend-make-ibm-stock-worth-the-wait-cm1011066',
      source: 'NASDAQ',
    },
    {
      title: "JKU Computer Scientist Wins IBM 'Quantum Computer' Competition",
      link: '',
      source: 'ENP Newswire',
    },
    {
      title:
        'Enterprise hits and misses - summer retail blowout, IBM Watson healthcare media showdown',
      link:
        'https://diginomica.com/2018/08/23/enterprise-hits-and-misses-summer-retail-blowout-ibm-watson-healthcare-media-showdown/',
      source: 'Diginomica',
    },
    {
      title:
        'IBM’s drone idea knows when you want a coffee, and then flies it to you',
      link:
        'https://www.digitaltrends.com/cool-tech/ibms-drone-idea-knows-when-you-want-a-coffee-and-then-delivers-it/',
      source: 'Digital Trends',
    },
    {
      title:
        "Data is king in IBM's marketing department — these are the tools it uses to make sure it's getting the most bang for its marketing buck",
      link:
        'https://www.businessinsider.com/ibm-marketing-pearl-optimizely-sprinklr-2018-8',
      source: 'Business Insider',
    },
  ],
  positivePercentage: '0.56',
  negativePercentage: '0.44',
  negativeArticles: 8,
  positiveArticles: 10,
};*/
