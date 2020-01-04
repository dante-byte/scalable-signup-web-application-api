"use strict";

const 

  
    express = require("express"),
    app = express(), //instantiate the express application 
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    layouts = require("express-ejs-layouts"); // require the express ejs-layouts module 

app.set("view engine", "ejs"); //sets the application to use ejs 
app.set("port", process.env.PORT || 8080);
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


*/