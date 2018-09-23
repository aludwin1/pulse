import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import articles from './reducers/articles';
import user from './reducers/user';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const middleware = applyMiddleware(thunkMiddleware, logger);

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({ articles, user });

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  return { store, persistor };
};
