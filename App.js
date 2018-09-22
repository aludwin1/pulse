import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import getStore from './store';
import App from './views/App';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import Dashboard from './views/Dashboard';

let { store, persistor } = getStore();

export default class AppWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => AppWithStore);
