
const Recipe = require('./Recipe');

let myDatabase = function() {
	this.recipes = [];
}

let recipeIndex = 0;
let index = 1;
myDatabase.prototype.displayRecipes = function() {
	for (let i=0;i<this.recipes.length;i++) {
		console.log(this.recipes[i]);
	}
}

myDatabase.prototype.postRecipe = function(recipe) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && this.recipes[i].dish == recipe.dish) {
      return false;
    }
  }
//	this.recipes[recipeIndex++] = recipe;
	this.recipes[recipeIndex++] = new Recipe(recipe.dish,recipe.ingredients,recipe.directions,recipe.category,recipe.image,index);
	index++;
	return true;
}

myDatabase.prototype.getRecipeByName = function(dish) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && dish == this.recipes[i].dish)
		{
//			return(this.recipes[i]);
      return(new Recipe(this.recipes[i].dish,this.recipes[i].ingredients,this.recipes[i].directions,this.recipes[i].category,this.recipes[i].image,this.recipes[i].index));
		}
  }
	return null;
}

myDatabase.prototype.getRecipeByIndex = function(index) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && index == this.recipes[i].index)
		{
//			return(this.students[i]);
      return(new Recipe(this.recipes[i].dish,this.recipes[i].ingredients,this.recipes[i].directions,this.recipes[i].category,this.recipes[i].image,this.recipes[i].index));
		}
  }
	return null;
}
/*
myDatabase.prototype.getRecentRecipe = function() {
  if (this.recipes.length != 0) {
    return(new Recipe(this.recipes[this.recipes.length-1].dish,this.recipes[this.recipes.length-1].ingredients,this.recipes[this.recipes.length-1].directions,this.recipes[this.recipes.length-1].category,this.recipes[this.recipes.length-1].image));
	}
	return null;
}
*/
module.exports = myDatabase;
