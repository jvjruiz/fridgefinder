import * as actions from './actions'

const initialState ={
	searchString: '',
	currentResults: [],
	currentRecipe:'',
	loading: false,
	currentGroceryList: [],
}

export default function Reducer(state = initialState, action = {}) {
	switch(action.type) {
		case actions.UPDATE_SEARCH_STRING:
			return Object.assign({},state,{
				searchString: action.payload
			});

		case actions.SEARCH_RECIPES_SUCCESS:
			return Object.assign({},state,{
				currentResults: action.payload
			});

		case actions.FETCH_CURRENT_RECIPE_SUCCESS:
			return Object.assign({}, state, {
				currentRecipe: action.payload
			})

		case actions.ADD_TO_GROCERY_LIST:
			return Object.assign({}, state, {
				currentGroceryList: state.currentGroceryList.concat(action.payload)
			})

		case actions.DELETE_GROCERY_ITEM:
			return Object.assign({}, state, {
				currentGroceryList: [...state.currentGroceryList.slice(0,action.payload), ...state.currentGroceryList.slice(action.payload + 1)]
			})

		case actions.CLEAR_GROCERY_LIST: 
			return Object.assign({}, state, {
				currentGroceryList: []
			})

		default:
			return state;
	}
};
