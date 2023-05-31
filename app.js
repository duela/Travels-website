//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash"); // Use Lodash libaray to convert express route parameter value to lower case
const port = 3000;
const app = express();




app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Use EJS to render parse paragraph element to home.ejs file
app.get("/", function(req, res){
  // use EJS to change values inside home.ejs homeTitle and homePost
  res.render("home");
});
//Use EJS to render parse about.ejs file to the server
app.get('/about', function(req, res) {
  res.render('about');
});
//Use EJS to render parse contact.ejs file to the server
app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/compose', function(req, res) {
  res.render('compose');
});

//tap into the post req data in compose
app.post('/compose', function(req, res) {
  // Tpo push value from the name titletext and postText in compose.ejs into composeTitleContainer and composeTitleContainer array
  // composeTitleContainer.push(req.body.titleText);
  // composePostContainer.push(req.body.postText);
  res.redirect('/');
});

// Express routing parameters to capture the values specified at their position in the URL
app.get('/post/:postName', function(req,res) {
  //Use Lodash libaray to convert express route parameter value to lower case
  // var requestedTitle = _.lowerCase(req.params.postName);
  // var postsChange = {
  //   postT: composeTitleContainer, postP: composePostContainer}
  // for (var i = 0; i < postsChange.postT.length; i++) {
  //   var requestedTitleKebab = _.lowerCase(postsChange.postT[i]);
  //   if (requestedTitleKebab === requestedTitle ) {
  //     res.render('post', {postTitle: postsChange.postT[i],
  //          postPost: postsChange.postP[i]
  //        });
  //   }
  // }
});

app.listen(port, function() {
  console.log("Server started on port 3000");
});




// <%- include('partials/header'); -%>
// <% homeTitle.forEach(function(home) { %>
//   <h1><%= homeTitle %></h1>
//   <p><%= homePost %></p>
// <% }) %>
//
// <%- include('partials/footer'); -%>
