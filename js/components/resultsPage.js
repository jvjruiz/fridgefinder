import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import * as actions from '../redux/actions';
import Result from './result'
import {connect} from 'react-redux';

class resultsPage extends Component {
	render() {
		console.log(this.props.currentResults)
		return (
			<View style={styles.container}>
				{this.props.currentResults.map((result,index) => <Result key={index} index={index} recipe={result} />)}
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentResults: state.currentResults
	}
}

export default connect(mapStateToProps)(resultsPage);

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		flex:1,
	},
})