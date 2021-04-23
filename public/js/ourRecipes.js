$(document).ready(function(){

    $.post("serverCreate",{dish:"Tuna Casserole",
                     ingredients:"3 cups cooked macaroni, 1 (5 ounce) can tuna drained, 1 (10.75 ounce) can condensed cream of chicken soup, 1 cup shredded Cheddar cheese, 1 ½ cups French fried onions",
                     directions:"Step 1: Preheat oven to 350 degrees F (175 degrees C). Step 2: In a 9x13-inch baking dish, combine the macaroni, tuna, and soup. Mix well, and then top with cheese. Step 3: Bake at 350 degrees F (175 degrees C) for about 25 minutes, or until bubbly. Sprinkle with fried onions, and bake for another 5 minutes. Serve hot.",
                     category:"Dinner",
                     image:"Tuna Casserole.jpg"},null);

     $.post("serverCreate",{dish:"Tuna Casserole",
                      ingredients:"3 tablespoons honey, 3 tablespoons Dijon mustard, 1 teaspoon lemon juice, 4 (6 ounce) salmon steaks, 0.5 teaspoon pepper",
                      directions:"Step 1: Preheat oven to 325 degrees F (165 degrees C). Step 2: In a small bowl, mix honey, mustard, and lemon juice. Spread the mixture over the salmon steaks. Season with pepper. Arrange in a medium baking dish. Step 3: Bake 20 minutes in the preheated oven, or until fish easily flakes with a fork.",
                      category:"Dinner",
                      image:"Easy Bake Fish.jpg"},null);

});
