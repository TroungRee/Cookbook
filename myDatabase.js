
const Recipe = require('./Recipe');

let myDatabase = function() {
		this.recipes = [];
}

let recipeIndex = 0;

myDatabase.prototype.displayRecipes = function() {
	for (let i=0;i<this.recipes.length;i++) {
		console.log(this.recipes[i]);
	}
}

myDatabase.prototype.postRecipe = function(recipe) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && this.recipes[i].id == recipe.id) {
      return false;
    }
  }
//	this.recipes[recipeIndex++] = recipe;
	this.recipes[recipeIndex++] = new Recipe(recipe.id,recipe.dish,recipe.category,recipe.ingredients,recipe.directions,recipe.image);
	return true;
}

myDatabase.prototype.getRecipe = function(id) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && id == this.recipes[i].id)
		{
//			return(this.recipes[i]);
      return(new Recipe(this.recipes[i].id,this.recipes[i].dish,this.recipes[i].category,this.recipes[i].ingredients,this.recipes[i].directions,this.recipes[i].image));
		}
  }
	return null;
}

myDatabase.prototype.putRecipe = function(recipe) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && this.recipes[i].id == recipe.id) {
//			this.recipes[i] = recipe;
      this.recipes[i] = new Recipe(recipe.id,recipe.dish,recipe.category,recipe.ingredients,recipe.directions,recipe.image);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteRecipe = function(id) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && id == this.recipes[i].id) {
			  let tempPtr = this.recipes[i];
        this.recipes[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
