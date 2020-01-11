"use strict";

const 

  
    express = require("express"),
    app = express(), //instantiate the express application 
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts"); // require the express ejs-layouts module 

app.set("view engine", "ejs"); //sets the application to use ejs 
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({
    extended: false /* tells the express.js app to use body-parser
                    for processing url encoded and json parameters 
                      \ */
  })
);

// middle functions 

app.use(express.json()); // app is ready to analyze data within incoming request 
app.use(layouts);
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index");
});


/* add routes for the courses page, contact page and contact 
form submission 
*/
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.get("/sa",homeController.showSa);
app.post("/contact", homeController.postedSignUpForm);
app.get("/test", homeController.showTest);






app.use(errorController.pageNotFoundError); // place after app.get functions 
app.use(errorController.internalServerError);

http://localhost:3000/contact





app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


/*

notes 
middle ware 

comes in  the middle of something and 
that something is a request or response 
cycle 

has access to request object 

has access to next function of request response lifecycle 





req.params -allows yout extract ids and tokens from the url
when you larn about RESTFUL trouts in unit 4 this request 
attribute allows you to identity which items are being requested 
in an e-commerce site or what user profile you should bevigate o 


req.body contains much of teh contents of the request which often 
includes data comming from a POST reques. such as a submitted 
form from teh request body you can collect information 
quickly and save it in a databsse 

url provides information about the url being visited similar to req.url 
in units basic web server 


req.query like body lets you pull data being submitted 
to the application server this data isn't necessarily from a POST 
request however. and is often requested in the URL as 
a query string. 














































*/