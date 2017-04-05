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
import { StackNavigator } from 'react-navigation';
import store from './js/redux/store';
import * as actions from './js/redux/actions';
import searchPage from './js/components/searchpage';
import BottomNavigation from './js/components/BottomNavigation';
import TabNavigation from './js/components/Navigator';
import resultsPage from './js/components/resultsPage';
import RecipeDisplay from './js/components/RecipeDisplay';
import GroceryListDisplay from './js/components/GroceryListDisplay';


export default class fridgeFinder extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabNavigation />
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
