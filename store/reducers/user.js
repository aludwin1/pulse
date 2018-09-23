const SET_LAST_PARAMS = 'SET_LAST_PARAMS';
const SAVE_QUERY = 'SAVE_QUERY';
const REMOVE_QUERY = 'REMOVE_QUERY';
const CLEAR_HISTORY = 'CLEAR_HISTORY';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
  queries: [],
  lastParams: {},
  currentPage: 'positive',
};

export const setLastParams = params => {
  return {
    type: SET_LAST_PARAMS,
    params,
  };
};

export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};

export const removeQuery = query => {
  return {
    type: REMOVE_QUERY,
    query,
  };
};

export const saveQuery = params => {
  return {
    type: SAVE_QUERY,
    params,
  };
};

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LAST_PARAMS:
      return {
        ...state,
        lastParams: action.params,
      };
    case SAVE_QUERY:
      if (
        state.queries.some(query => {
          return JSON.stringify(query) === JSON.stringify(action.params);
        })
      ) {
        return state;
      } else if (state.queries > 5) {
        return {
          ...state,
          queries: [action.params, ...state.queries.slice(0, 5)],
        };
      } else {
        return {
          ...state,
          queries: [action.params, ...state.queries],
        };
      }
    case REMOVE_QUERY:
      return {
        ...state,
        queries: state.queries.filter(
          query => JSON.stringify(query) !== JSON.stringify(action.query)
        ),
      };
    case CLEAR_HISTORY:
      return {
        queries: [],
        lastParams: {},
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};
