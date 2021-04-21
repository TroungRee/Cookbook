
let Recipe = function(dish,ingredients,directions,category,image) {
  	this.dish = dish;
  	this.ingredients = ingredients;
  	this.directions = directions;
  	this.category = category;
    this.image = image;
}

module.exports = Recipe;
