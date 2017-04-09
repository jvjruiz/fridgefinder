import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Image
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

class GroceryItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked:false
		}
	}

	toggleChecked() {
		this.setState({checked:!this.state.checked})
	}

	deleteItem() {
		console.log(this.props.index)
		this.props.deleteItem(this.props.index)
	}

	render() {
		return(
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.toggleChecked.bind(this)}>	
					<View style={styles.checkbox}>
						{this.state.checked ?
                         <Icon name="check" size={10} color='#000000' style={styles.icon} />
                         :
                         null
                    }
					</View>
				</TouchableWithoutFeedback>
				<View style={styles.textBox}>	
					<Text style={styles.header}>{this.props.item.name[0].toUpperCase()}{this.props.item.name.slice(1,this.props.item.name.length)}</Text>
					<Text style={styles.details}>Quantity: {this.props.item.amount} {this.props.item.unit} Aisle: {this.props.item.aisle}</Text>
				</View>
				<TouchableWithoutFeedback  onPress={this.deleteItem.bind(this)}>
					<View style={styles.checkbox}>
						<Icon name="times" size={10} color='#000000' style={styles.icon} />
					</View> 
				</TouchableWithoutFeedback>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		null
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (index) => {
			dispatch(actions.deleteGroceryItem(index))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceryItem);

const styles = StyleSheet.create({
	container: {
		paddingHorizontal:10,
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
	},
	icon: {
		paddingLeft: 2
	}
})