let id=0;
let Recipe = function(dish,category,ingredients,directions,image) {
    this.id = id;
  	this.dish = dish;
  	this.category = category;
  	this.ingredients = ingredients;
  	this.directions = directions;
    this.image = image;
    id++;
}

module.exports = Recipe;
