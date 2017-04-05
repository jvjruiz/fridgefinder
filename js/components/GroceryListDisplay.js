import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	Button,
	Linking
} from 'react-native';
import * as actions from '../redux/actions';
import {connect} from 'react-redux';

import GroceryItem from './GroceryItem'

class GroceryListDisplay extends Component {
	onPress() {
		this.props.onPress()
	}

	render() {
		return(
			<ScrollView style={styles.container}>
				{this.props.currentGroceryList.map((item,index) => <GroceryItem key={index} index={index} item={item} />)}
				<Button onPress={() => this.onPress()} title="Clear List" />
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentGroceryList: state.currentGroceryList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onPress: () => {
			dispatch(actions.clearGroceryList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryListDisplay);



const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})