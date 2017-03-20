import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import Ingredient from './Ingredient'

class IngredientList extends Component {
	render() {
		if(this.props.currentRecipe) {
			return (
				<View style={styles.container}>
					{this.props.currentRecipe.extendedIngredients.map((ingredient,index) => <Ingredient key={index} index={index} ingredient={ingredient} />)}
				</View>
			)
		}
		else {
			return( 
				<View style={styles.container}>
					<Text>
						Loading
					</Text>
				</View>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(IngredientList);

const styles = StyleSheet.create({
	conntainer: {
		flex: 1
	},
})