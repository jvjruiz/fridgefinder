import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image
} from 'react-native';

export default class GroceryItem extends Component {
	render() {
		return(
			<TouchableHighlight onPress={this.props.onPress}>
				<View style={styles.container}>
					<View style={styles.textBox}>	
						<Text style={styles.header}>{this.props.item.name[0].toUpperCase()}{this.props.item.name.slice(1,this.props.item.name.length)}</Text>
						<Text style={styles.details}>Quantity: {this.props.item.amount} {this.props.item.unit} Aisle: {this.props.item.aisle}</Text>
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