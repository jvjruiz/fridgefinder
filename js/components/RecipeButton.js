import React, {Component} from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

class RecipeButton extends Component {
	constructor(props) {
		super(props)
		this.state = {pressed:false}
	}

	onPressButton() {
		let ingredients = this.props.currentRecipe.extendedIngredients
		this.props.dispatch(actions.addToGroceryList(ingredients))
		this.setState({pressed:true})
	}

	render() {
		if(this.state.pressed == false) {
			return (
			<Button 
				onPress={this.onPressButton.bind(this)}
				title="Add To Grocery List"
				accessibilityLabel ="Adds items to grocery list"
			/>		
			)	
		}
		else {
			return (
				<Text style={styles.notification}>Ingredients Added!</Text>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(RecipeButton);

const styles = StyleSheet.create({
	notification: {
		fontSize: 20,
		textAlign: 'center',
		paddingTop: 5,

	}
})