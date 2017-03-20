import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS
} from 'react-native';

import {Provider} from 'react-redux';
import store from './js/redux/store';
import * as actions from './js/redux/actions'
import searchPage from './js/components/searchpage'


export default class fridgeFinder extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS style={styles.container}
          initialRoute={{
            component:searchPage,
            title: 'FridgeFinder'
          }}
        />
      </Provider>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('fridgeFinder', () => fridgeFinder);
