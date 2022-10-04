//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");  // our own module for date (date.js)

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

let workItems = [];

app.set('view engine', 'ejs'); //use ejs

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public")); //to link CSS files

app.get("/", function(req, res) {

  let fullDate = date.getDate();   //we call the date function
  let onlyDay = date.getDay(); //this for function that return day only in date.js module
  console.log(onlyDay);

  res.render("list", {
    listTitle: fullDate, //listTitle sini utk show date (h1)
    newListItems: items  //array
  }); //list = folder inside views . //kindOfDay = to use in .ejs file in views folder.
});

app.post("/", function(req, res) {

  let n = req.body.newItem;

  if(req.body.list === "Work"){      //for /work route (list is from button on ejs(name: list))
    workItems.push(n);
    res.redirect("/work") //go to /work route
  }else{
    items.push(n);

    res.redirect("/"); //go to home route
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",  //listTitle sini utk show Work List (h1)
    newListItems: workItems  //array
  });
});

app.post("/work", function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
