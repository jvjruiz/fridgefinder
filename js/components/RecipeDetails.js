import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Linking
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import RecipeButton from './RecipeButton';

import IngredientList from './IngredientList';


class RecipeDetails extends Component {
	render() {
		return ( 
			<ScrollView style={styles.scroll}>	
				<Text style={styles.headerText}>
					Ingredients
				</Text>
				<IngredientList />
				<RecipeButton />
				<Text style={styles.headerText}>
					Instructions
				</Text>
				<Text style={styles.link} onPress={() => Linking.openURL(this.props.currentRecipe.sourceUrl)}>
					Read Detailed Instructions on {this.props.currentRecipe.creditText}
				</Text>
			</ScrollView>
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
	headerText: {
		fontWeight: 'bold',
		paddingLeft: 25,
		paddingVertical: 10
	},
	normalText: {
		paddingHorizontal:25,
	},
	scroll: {
		flex:2,
		paddingTop: -20
	},
	link: {
		color:'blue',
		paddingHorizontal:25,
	}
})
