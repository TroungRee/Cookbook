
const MyRecipes = require('./Recipe');

let myDatabase = function() {
		this.myRecipes = [];
}

let recipeIndex = 0;

myDatabase.prototype.displayRecipes = function() {
	for (let i=0;i<this.myRecipes.length;i++) {
		console.log(this.myRecipes[i]);
	}
}

myDatabase.prototype.postRecipe = function(recipe) {
  for (let i=0;i<this.myRecipes.length;i++) {
    if (this.myRecipes[i] && this.myRecipes[i].id == recipe.id) {
      return false;
    }
  }
//	this.myRecipes[recipeIndex++] = recipe;
	this.myRecipes[recipeIndex++] = new Recipe(recipe.id,recipe.dish,recipe.category,recipe.ingredients,recipe.directions,recipe.image);
	return true;
}

myDatabase.prototype.getRecipe = function(id) {
  for (let i=0;i<this.myRecipes.length;i++) {
    if (this.myRecipes[i] && id == this.myRecipes[i].id)
		{
//			return(this.myRecipes[i]);
      return(new Recipe(this.myRecipes[i].id,this.myRecipes[i].dish,this.myRecipes[i].category,this.myRecipes[i].ingredients,this.myRecipes[i].directions,this.myRecipes[i].image));
		}
  }
	return null;
}

myDatabase.prototype.putRecipe = function(recipe) {
  for (let i=0;i<this.myRecipes.length;i++) {
    if (this.myRecipes[i] && this.myRecipes[i].id == recipe.id) {
//			this.myRecipes[i] = recipe;
      this.myRecipes[i] = new Recipe(recipe.id,recipe.dish,recipe.category,recipe.ingredients,recipe.directions,recipe.image);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteRecipe = function(id) {
  for (let i=0;i<this.myRecipes.length;i++) {
    if (this.myRecipes[i] && id == this.myRecipes[i].id) {
			  let tempPtr = this.myRecipes[i];
        this.myRecipes[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
