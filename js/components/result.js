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
					<View style={styles.textBox}>	
						<Text style={styles.header}>{this.props.recipe.title}</Text>
						<Text style={styles.details}>Likes: {this.props.recipe.likes} Matching Ingredients: {this.props.recipe.usedIngredientCount}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingRight: 1,
		flexDirection: 'row',
		height:70,
		justifyContent: 'center',
		borderColor: '#48BBEC',
		borderWidth: .5,
	},
	header: {
		fontWeight:'bold',
		paddingBottom: 5,
		fontSize:10,
	},
	details: {
		fontSize:11
	},
	textBox: {
		flex: 1,
		height: 50,
		marginRight: 10,
		marginVertical: 15,
		paddingLeft: 10
	},
	image: {
		marginTop:7.5,
		height:54,
		width:96
	}
})