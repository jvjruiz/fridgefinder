import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class GroceryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked:false
		}
	}

	toggleChecked() {
		console.log('hello')
		this.setState({checked:!this.state.checked})
	}

	render() {
		return(
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.toggleChecked.bind(this)}>	
					<View style={styles.checkbox}>
						{this.state.checked ?
                         <Icon name="angle-left" size={16} color='#000000' />
                         :
                         null
                    }
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.textBox}>	
					<Text style={styles.header}>{this.props.item.name[0].toUpperCase()}{this.props.item.name.slice(1,this.props.item.name.length)}</Text>
					<Text style={styles.details}>Quantity: {this.props.item.amount} {this.props.item.unit} Aisle: {this.props.item.aisle}</Text>
				</View>
			</View>
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
	},
	checkbox: {
		height:15,
		width:15,
		borderColor: 'gray',
		borderWidth:1,
		marginTop:25,
	}
})