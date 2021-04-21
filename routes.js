var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');


//var addRecipe = require("/public/js/addRecipe.js");
//console.log(addRecipe);
router.get("/",function(req,res){

    //addRecipe.testing();

    res.sendFile(__dirname + "/public/html/home.html");
});

router.get("/home",function(req,res){
    res.sendFile(__dirname + "/public/html/home.html");
});

router.get("/add",function(req,res){
    res.sendFile(__dirname + "/public/html/addRecipe.html");
});

router.get("/myRecipes",function(req,res){
		res.sendFile(__dirname + "/public/html/myRecipes.html");
});

router.get("/show",function(req,res){
		res.sendFile(__dirname + "/public/html/displayRecipe.html");
});

router.post("/updateRecipePage",function(req,res){

		res.sendFile(__dirname + "/public/html/displayRecipe.html");
});


const Recipe = require('./Recipe');


let retRecipe = new Recipe();
console.log(retRecipe);
router.get("/getRecipe",function(req,res){
    retRecipe
    res.json(retRecipe);
});

router.get("/display",function(req,res){
	    res.sendFile(__dirname + "/public/html/displayRecipe.html");
});
/*
router.get('/request', function(req, res){
			res.json(imageInfo);
});
*/

module.exports = router;
