import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/routes';
import {Provider} from 'react-redux';
import persistedStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  const {store, persistor} = persistedStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <NavigationContainer>
        <Route />
        <FlashMessage position="top" duration={3000} />
      </NavigationContainer>
    </Provider>
  );
}
