// Day 4 (Middleware)

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./view");

/*
function display(request, response, next) {
	console.log("display");
	next();
});
app.use(display);
app.get("/", function (request, response) {
  response.render('demo');
});
*/
function employee(request, response, next) {
  // sbse phele ye load hota h
  var emp = {
    // object
    ename: "Rahul" , salary: 120000000 , mobile: "904242592",
  };
  request.emp = emp; // add object with request
  next(); // reload ko stop kr deta h eske bina refresh wala chakr ghumta rhe ga
}
app.use(employee); // use nhi krege to middleware load / use nhi hoga
app.get("/", function (request, response) {
  response.send(
    request.emp.ename + " " + request.emp.salary + " " + request.emp.mobile
  );
});
app.listen(5000);