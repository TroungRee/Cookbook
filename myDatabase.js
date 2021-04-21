
const Recipe = require('./Recipe');



let recipeIndex = 0;

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
	this.recipes[recipeIndex++] = new Recipe(recipe.dish,recipe.name,recipe.age,recipe.grade);
	return true;
}

myDatabase.prototype.getRecipe = function(id) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && id == this.recipes[i].dish)
		{
//			return(this.recipes[i]);
      return(new Recipe(this.recipes[i].dish,this.recipes[i].name,this.recipes[i].age,this.recipes[i].grade));
		}
  }
	return null;
}

myDatabase.prototype.putRecipe = function(recipe) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && this.recipes[i].dish == recipe.dish) {
//			this.recipes[i] = recipe;
      this.recipes[i] = new Recipe(recipe.dish,recipe.name,recipe.age,recipe.grade);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteRecipe = function(id) {
  for (let i=0;i<this.recipes.length;i++) {
    if (this.recipes[i] && id == this.recipes[i].dish) {
			  let tempPtr = this.recipes[i];
        this.recipes[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
