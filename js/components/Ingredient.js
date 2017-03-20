import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';

export default class Result extends Component {
	render() {
		return(
			<View>
				<Text style={styles.normalText}>
					{this.props.ingredient.originalString}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	normalText: {
		paddingHorizontal: 25
	}
})