import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import * as actions from '../redux/actions';
import Result from './result';
import RecipeDisplay from './RecipeDisplay';
import {connect} from 'react-redux';

class resultsPage extends Component {
	onPress(recipe, event) {
		this.props.dispatch(actions.fetchCurrentRecipe(recipe.id))
		const nextRoute = {
			component: RecipeDisplay,
			title: recipe.title
		}
		this.props.navigator.push(nextRoute)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.props.currentResults.map((result,index) => <Result key={index} index={index} recipe={result} ref={result.title} onPress={this.onPress.bind(this, result)} />)}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentResults: state.currentResults,
		currentRecipe: state.currentRecipe
	}
}

export default connect(mapStateToProps)(resultsPage);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex:1,
	},
	header: {
		textAlign: 'center',
		paddingBottom: 5,

	}
})