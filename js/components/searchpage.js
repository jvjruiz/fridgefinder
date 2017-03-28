import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import resultsPage from './resultsPage';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

class searchPage extends Component {
  onSubmit(nextRoute) {
    this.props.dispatch(actions.searchRecipes(this.props.searchString))
    this.props.navigator.push(nextRoute);
  }

  render() {
  	const nextRoute = {
  		component:resultsPage,
  		title: 'Results'
  	}

    return (
        <Image souce={{uri: "http://www.samsung.com/us/kitchensuite/images/refrigerator-lower-open.jpg"}} style={styles.container}>
          <Text style={styles.instructions}>
            To get started, search the ingredients you already have
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Separate ingredients with commas e.g. salt, pepper, steak"
            onChangeText = {(text) => this.props.dispatch(actions.updateSearchString(text))}
            onSubmitEditing = {() => this.onSubmit(nextRoute)}
          />
          <Button
            onPress={() => this.onSubmit(nextRoute)}
            style={styles.button}
            title="Search for recipes">
          </Button>
        </Image>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		searchString: state.searchString,
	}
}

export default connect(mapStateToProps)(searchPage);

const styles = StyleSheet.create({
  container: {
    width: undefined,
    height: undefined,
    resizeMode:'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    textAlign: 'center',
    height:40
  },
  button: {
    height:40,
    textAlign: 'center'
  }
});
