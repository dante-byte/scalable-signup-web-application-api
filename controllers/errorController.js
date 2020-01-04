"use strict";

const httpStatus = require("http-status-codes");


//handle all request not previously handled 

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};



// handle internal server errors 
exports.internalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is taking a nap!`);
};

/* add routes to the main.js 

.pageNotFoundError 
.internalServerError


*/
