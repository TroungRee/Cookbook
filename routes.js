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



const Recipe = require('./Recipe');
const myDatabase = require('./myDatabase');
let db = new myDatabase();



router.post('/create', function(req, res){
	if (req.body.dish == "") {
		res.json({retVal:false});
		return;
	}
	let obj = new Recipe(req.body.dish,req.body.ingredients,req.body.directions,req.body.category,req.body.image);
	res.json({retVal:db.postRecipe(obj)});
});

let retRecipe = new Recipe();
router.post("/updateRecipe",function(req,res){
      var tempRecipe = db.getRecipe(req.body.dish);
      retRecipe = tempRecipe;
});

router.post("/printRecipes",function(req,res){
      console.log(db.getRecipe(req.body.dish));
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = __dirname + '/public/images/' + files.filetoupload.name;
	      mv(oldpath, newpath, function (err) {
		        if (err) throw err;
        });
    });
});


module.exports = router;
