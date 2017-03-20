import * as actions from './actions'

const initialState ={
	searchString: '',
	currentResults: [],
	currentRecipe:'',
	loading: false,
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
		default:
			return state;
	}
};
