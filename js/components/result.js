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
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={styles.container}>
					<Image
						source={{uri: this.props.recipe.image}}
						style={styles.image}
					/>
					<Text style={styles.textBox}>{this.props.recipe.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
		flexDirection: 'row',
		marginBottom: 10,
	},
	textBox: {
		flex: 1,
		height: 36,
		borderColor: '#48BBEC',
		borderWidth: 1,
		textAlign: 'center',
		marginRight: 10,
	},
	image: {
		height:36,
		width:64
	}
})