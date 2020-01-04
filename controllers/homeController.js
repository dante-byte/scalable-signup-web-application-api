"use strict";
"use strict";

var courses = [ // an array of courses 
  {
    title: "Java Course",
    cost: 50
  },
  {
    title: "Java Script Course ",
    cost: 25
  },
  {
    title: "Rust Programming",
    cost: 10
  }
]; // course array 

exports.showCourses = (req, res) => { // pass the course array to the view 
  res.render("courses", {
    offeredCourses: courses
  });
};

exports.showSignUp = (req, res) => { // call backfunction 
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};

exports.showSa = (req,res) => {
  res.render("sa");


};

exports.showTest = (req, res) => {

  res.render('test')
}
