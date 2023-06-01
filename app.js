//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash"); // Use Lodash libaray to convert express route parameter value to lower case
const port = 3000;
const app = express();

const aboutFirst = "DND travels, a subsidiary of DND GIANTS LTD is one of the leading Tour operators in Nigeria providing comprehensive travel services for individuals, groups and corporations within and outside Nigeria."
const aboutSecond  =  "We are a reputable and professionally managed company. We have a track record of creating memorable  travels experiences for every of our clients. Why not join our family to enjoy affordable luxury."

const cairoImage = {
   cairoImageMain: "img/IMG-1985.jpg",
   cairoImage1st: "img/IMG-1985.jpg",
   cairoImage2nd: "img/IMG-1985.jpg",
   cairoImage3rd: "img/IMG-1985.jpg",
   cairoImage4th: "img/IMG-1985.jpg",
   cairoImage5th: "img/IMG-1985.jpg",
   cairoImage6th: "img/IMG-1985.jpg"
}
const zanzibarImage = {
   zanzibarImageMain: "img/IMG-1987.jpg",
   zanzibarImage1st: "img/IMG-1987.jpg",
   zanzibarImage2nd: "img/IMG-1985.jpg",
   zanzibarImage3rd: "img/IMG-1985.jpg",
   zanzibarImage4th: "img/IMG-1985.jpg",
   zanzibarImage5th: "img/IMG-1985.jpg",
   zanzibarImage6th: "img/IMG-1985.jpg"
}

const vacationPlaces = ["Cairo", "Zanzibar", "Bali", "Singapore"];
const vactionpricesFrom = {cairoVactionpricesFrom: "1545", zanzibarVactionpricesFrom: "1,590,000", baliVactionpricesFrom: "1650", singaporeVactionpricesFrom: "300" };
const vactionpricesTo = {cairoVactionpricesTo: "1810", zanzibarVactionpricesTo: "1,800,000", baliVactionpricesTo: "2050", singaporeVactionpricesTo: "400" };
const vactionDetails = { cairoVactionDetails: "Egypt visa on arrival | Return flight ticket | Domestic flight | 2 nights in Cairo with breakfast, lunch & dinner | Cairo city tour (Pyramids of Giza, Sphinx tour, Egypt Musuem) | Deep sea diving & snorkeling |Desert safari and Quad biking | Glass boat | parasailing | Airport transfers",
 zanzibarVactionDetails: "E-visa | Return Economy Flight Ticket | Daily breakfast & dinner | 5 Nights Beach Resort accommodation Stone Town tour | Ocean Safari blue with launch | Snorkeling | Desert safari and Quad biking | Sunset cruise |  Airport transfers",
 baliVactionDetails: "Indonesia visa | 4 Night Accomodation in Ubud | 3 Night Accomodation in Seminyak | Lunch & dinner | Stone Town tour | Ocean Safari blue with launch | Snorkeling ttip to Blue lagoon | Desert safari and Quad biking | Goa Giri Putri temple |  Airport transfers and private transport",
 singaporeVactionDetails: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum incidunt, aperiam nostrum et. Voluptas vel labore numqua."
}
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//Use EJS to render parse paragraph element to home.ejs file
app.get("/", function(req, res){
  // use EJS to change values inside home.ejs homeTitle and homePost
  res.render("index", {aboutFirstSentence:aboutFirst, aboutSecondSentence:aboutSecond,
    cairoImage: cairoImage.cairoImageMain, zanzibarImage: zanzibarImage.zanzibarImageMain, cairo:"Cairo", zanzibar: "Zanzibar", bali:"Bali", singapore:"Singapore",
    cairoVactionpricesFrom: vactionpricesFrom.cairoVactionpricesFrom, zanzibarVactionpricesFrom: vactionpricesFrom.zanzibarVactionpricesFrom ,
    baliVactionpricesFrom: vactionpricesFrom.baliVactionpricesFrom, singaporeVactionpricesFrom: vactionpricesFrom.singaporeVactionpricesFrom,

    cairoVactionpricesTo: vactionpricesTo.cairoVactionpricesTo, zanzibarVactionpricesTo: vactionpricesTo.zanzibarVactionpricesTo ,
    baliVactionpricesTo: vactionpricesTo.baliVactionpricesTo, singaporeVactionpricesTo: vactionpricesTo.singaporeVactionpricesTo,

    cairoVactionDetails: vactionDetails.cairoVactionDetails, zanzibarVactionDetails: vactionDetails.zanzibarVactionDetails ,
    baliVactionDetails: vactionDetails.baliVactionDetails, singaporeVactionDetails: vactionDetails.singaporeVactionDetails




  });
});
//Use EJS to render parse about.ejs file to the server
app.get('/about', function(req, res) {
  res.render('about');
});
//Use EJS to render parse contact.ejs file to the server
app.get('/contact', function(req, res) {
  res.render('contact');
});

// app.get('/details', function(req, res) {
//   res.render('details');
// });
app.get('/blog', function(req, res) {
  res.render('blog');
});
app.get('/blog-details', function(req, res) {
  res.render('blog-details');
});
app.get('/packages', function(req, res) {
  res.render('packages');
});
app.get('/terms', function(req, res) {
  res.render('terms');
});
app.get('/testimonials', function(req, res) {
  res.render('testimonials');
});

//tap into the post req data in compose
app.post('/compose', function(req, res) {
  // Tpo push value from the name titletext and postText in compose.ejs into composeTitleContainer and composeTitleContainer array
  // composeTitleContainer.push(req.body.titleText);
  // composePostContainer.push(req.body.postText);
  res.redirect('/');
});

// Express routing parameters to capture the values specified at their position in the URL
app.get('/details/:packageName', function(req,res) {
  // Use Lodash libaray to convert express route parameter value to lower case
  var requestedTitle = _.lowerCase(req.params.packageName);
  console.log(req.params.packageName);
  // var postsChange = {
  //   postT: vacationPlaces}
  //  var requestedTitleKebab = _.lowerCase("Cairo");
    if (requestedTitle === "cairo" ) {
      // "Cairo", "Zanzibar", "Bali", "Singapore"
      res.render('details', {vactionDetails: vactionDetails.cairoVactionDetails , imageMain: cairoImage.cairoImageMain ,
         image1st: cairoImage.cairoImage1st , image2nd: cairoImage.cairoImage2nd , image3rd: cairoImage.cairoImage3rd ,
         image4th: cairoImage.cairoImage4th , image5th: cairoImage.cairoImage5th , image6th: cairoImage.cairoImage6th,
         highPrice: vactionpricesFrom.cairoVactionpricesTo, lowPrice: vactionpricesFrom.cairoVactionpricesTo
         });
    }
    // else if (requestedTitle === _.lowerCase("zanzibar") ) {
    //
    //
    //   // "Cairo", "Zanzibar", "Bali", "Singapore"
    //   res.render('details', {vactionDetails: vactionDetails.zanzibarVactionDetails , imageMain: zanzibarImageMain ,
    //      image1st: zanzibarImage1st , image2nd: zanzibarImage2nd , image3rd: zanzibarImage3rd , image4th: zanzibarImage4th ,
    //      image5th: zanzibarImage5th , image6th: zanzibarImage6th, highPrice: vactionpricesFrom.zanzibarVactionpricesTo,
    //      lowPrice: vactionpricesFrom.zanzibarVactionpricesTo
    //      });
    // }


});


//
// app.get('/details/cairo', function(req,res) {
//
//       // "Cairo", "Zanzibar", "Bali", "Singapore"
//       res.render('details', {vactionDetails: vactionDetails.cairoVactionDetails , imageMain: cairoImageMain ,
//          image1st: cairoImage1st , image2nd: cairoImage2nd , image3rd: cairoImage3rd , image4th: cairoImage4th ,
//          image5th: cairoImage5th , image6th: cairoImage6th, highPrice: vactionpricesFrom.cairoVactionpricesTo,
//          lowPrice: vactionpricesFrom.cairoVactionpricesTo
//          });
//
//
//
// });



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
