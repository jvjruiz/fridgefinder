import React, {Component} from 'react';
import {
	TextInput,
} from 'react-native';

export default class SearchTextInput extends Component {
	render() {
		return(
			<TextInput
				{...this.props}
				style = {this.props.style}
				title = {this.props.title}
				onChangeText = {this.props.onChangeText}
				onSubmitEditing = {this.props.onSubmitEditing}
			/>
		)
	}
} 