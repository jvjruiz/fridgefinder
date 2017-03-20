import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import IngredientList from './IngredientList';


class RecipeDetails extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>
					Ingredients
				</Text>
				<IngredientList />
				<Text style={styles.headerText}>
					Instructions
				</Text>
				<Text style={styles.normalText}>
					{this.props.currentRecipe.instructions ? this.props.currentRecipe.instructions : 'No Instructions available'}
				</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(RecipeDetails);

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	headerText: {
		fontWeight: 'bold',
		paddingLeft: 25,
		paddingVertical: 10
	},
	normalText: {
		paddingHorizontal:25,
	}
})
