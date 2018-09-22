import axios from 'axios';

const SET_LOADING = 'LOADING';
const POPULATE_ARTICLES = 'POPULATE_ARTICLES';
const SET_ERROR = 'SET_ERROR';

const initialState = {
  top5NegativeStories: [],
  top5PositiveStories: [],
  positivePercentage: null,
  negativePercentage: null,
  negativeArticles: null,
  positiveArticles: null,
  isLoading: false,
  error: false,
};

const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

const setError = err => {
  return {
    type: SET_ERROR,
    err,
  };
};

const populateArticles = articles => {
  return {
    type: POPULATE_ARTICLES,
    articles,
  };
};

export const fetchArticles = params => {
  return async dispatch => {
    try {
      const link =
        'https://brand-health-db.herokuapp.com/api/?company=' +
        params.company +
        '&days=' +
        params.days;
      console.log(params);
      const { data } = await axios.get(link);
      dispatch(populateArticles(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.err };
    case SET_LOADING:
      return { ...state, isLoading: !state.isLoading };
    case POPULATE_ARTICLES:
      return {
        ...state,
        top5NegativeStories: action.articles.top5NegativeStories,
        top5PositiveStories: action.articles.top5PositiveStories,
        negativeArticles: action.articles.negativeArticles,
        positiveArticles: action.articles.positiveArticles,
        positivePercentage: action.articles.positivePercentage,
        negativePercentage: action.articles.negativePercentage,
      };
    default:
      return state;
  }
};
