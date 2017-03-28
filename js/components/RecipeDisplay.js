import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	ScrollView
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';
import RecipeDetails from './RecipeDetails'


class RecipeDisplay extends Component {
	render() {
		console.log(this.props.currentRecipe)
		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.currentRecipe.image}} style={styles.image}/>
				<RecipeDetails />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(RecipeDisplay);

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		flex:1,
	},

	image: {
		justifyContent: 'center',
		flex:2
	}
})