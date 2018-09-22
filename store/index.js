import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import articles from './reducers/articles';

const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(articles, middleware);

export default store;
export * from './reducers/articles';
