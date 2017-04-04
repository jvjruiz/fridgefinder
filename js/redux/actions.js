export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export function updateSearchString(string) {
	return {
		type:UPDATE_SEARCH_STRING,
		payload: string
	}
}

//to do sync actions for handling recipe data
export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export function searchRecipes(keywords) {
	return (dispatch) => {
		return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="+ keywords +"&limitLicense=false&number=10&ranking=1", {
				method:"GET",
				headers: {
					"X-Mashape-Key": "HsCvWVP806mshNstsYQkY6Xqu6Vmp1l2Ockjsnfy1mxCrtpoq2",
					"Accept": "application/json",
					}
				})
		.then((response) => response.json())
		.then((data) => dispatch(searchRecipesSuccess(data)))
	}
}

export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export function searchRecipesSuccess(recipes) {
	return {
		type:SEARCH_RECIPES_SUCCESS,
		payload: recipes
	}
}

export const FETCH_CURRENT_RECIPE = 'FETCH_CURRENT_RECIPE';
export function fetchCurrentRecipe(id) {
	return (dispatch) => {
		return fetch("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + id + "/information", {
			method:"GET",
			headers: {
					"X-Mashape-Key": "HsCvWVP806mshNstsYQkY6Xqu6Vmp1l2Ockjsnfy1mxCrtpoq2",
					"Accept": "application/json",
				}
			})
		.then((response) => response.json())
		.then((data) => dispatch(fetchCurrentRecipeSuccess(data)))
	}
}


export const FETCH_CURRENT_RECIPE_SUCCESS = "FETCH_CURRENT_RECIPE_SUCCESS";
export function fetchCurrentRecipeSuccess(recipeData) {
	return {
		type:FETCH_CURRENT_RECIPE_SUCCESS,
		payload:recipeData
	}
}