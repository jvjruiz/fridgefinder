import React, {Component} from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {
	Text
} from 'react-native';

import GroceryListDisplay from './GroceryListDisplay';
import resultsPage from './resultsPage';
import RecipeDisplay from './RecipeDisplay';
import searchPage from './searchpage';

const RecipeStack = StackNavigator({
	Home:
		{screen: searchPage,
	  	navigationOptions: {
	  			title:"FridgeFinder"
	  	}},
	ResultsPage:
  		{screen:resultsPage,
  		navigationOptions: {
  			title: "Results"
  		}},
	RecipeDisplay:
  		{screen:RecipeDisplay,
  		navigationOptions: {
  			title: ({state}) => `${state.params.recipe}`
  		}},
});

const GroceryListStack = StackNavigator({
	Home: {screen: GroceryListDisplay,
		navigationOptions: {
			title: "Grocery List"
		}},
})

const MainScreenNavigator = TabNavigator({
	Search: {screen: RecipeStack},
	GroceryList: {screen: GroceryListStack},
});


export default class Navigation extends Component {
	render() {
		return (
			<MainScreenNavigator />
		)
	};
}