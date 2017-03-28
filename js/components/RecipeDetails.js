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

import IngredientList from './IngredientList';


class RecipeDetails extends Component {
	render() {
		if(this.props.currentRecipe.instructions) {
			return (
				<ScrollView styles={styles.scroll}>	
					<Text style={styles.headerText}>
						Ingredients
					</Text>
					<IngredientList />
					<Text style={styles.headerText}>
						Instructions
					</Text>
					<Text style={styles.normalText}>
						{this.props.currentRecipe.instructions}
					</Text>
				</ScrollView>
			)
		}
		else {
			return ( 
				<ScrollView>	
					<Text style={styles.headerText}>
						Ingredients
					</Text>
					<IngredientList />
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
		paddingTop: -25
	},
	link: {
		color:'blue',
		paddingHorizontal:25,
	}
})
