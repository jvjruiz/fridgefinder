import React, {Component} from 'react';
import BottomNavigation, {Tab} from 'react-native-material-bottom-navigation';


class BottomNavigator extends Component {
	render() {
			return(
			<BottomNavigation 
				labelColor="white"
				rippleColor="white"
				style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
			>
				<Tab
		          barBackgroundColor="#37474F"
		          label="Recipe Finder"
		          
		        />
		        <Tab
		          barBackgroundColor="#00796B"
		          label="Grocery List"
		         
		        />
			</BottomNavigation>
			)
	}
}

export default BottomNavigator;