import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView
} from 'react-native';
import * as actions from '../redux/actions';
import Result from './result';
import RecipeDisplay from './RecipeDisplay';
import {connect} from 'react-redux';

class resultsPage extends Component {
	onSubmit(nextRoute) {
		console.log(this.props.searchString)
	    this.props.dispatch(actions.searchRecipes(this.props.searchString))
	 }

	onPress(recipe, event) {
		this.props.dispatch(actions.fetchCurrentRecipe(recipe.id))
		console.log(this.props.currentResults)
		const nextRoute = {
			component: RecipeDisplay,
			title: recipe.title
		}
		this.props.navigator.push(nextRoute)
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TextInput
		            style={styles.input}
		            placeholder="Search another recipe e.g. salt, pepper, steak"
		            onChangeText = {(text) => this.props.dispatch(actions.updateSearchString(text))}
		            onSubmitEditing = {() => this.onSubmit()}
		          	/>
					{this.props.currentResults.map((result,index) => <Result key={index} index={index} recipe={result} ref={result.title} onPress={this.onPress.bind(this, result)} />)}
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchString: state.searchString,
		currentResults: state.currentResults,
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(resultsPage);

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	header: {
		textAlign: 'center',
		paddingBottom: 5,
	},
	input: {
		height:36,
		marginHorizontal: 15
	}
})