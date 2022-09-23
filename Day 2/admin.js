/*
//Lec 5
//sirf admin page chlane k liye nodemon admin.js
var express = require("express");

const app = express();
app.get("/",function(request,response) {
     response.send("<a href='http://localhost:5000/test'>Admin Link</a>");
});

app.listen(5000);

*/
/*
// linking of index and admin page
var express = require("express");
const router = express.Router();

router.get("/", function (request, response) {
  response.send("<a href='http://localhost:5000/admin/test'>Admin Page</a>");
});
router.get("/test", function (request, response) {
  response.send(
    "<h1>Admin Text Link</h1><a href='http://localhost:5000/admin/test/123'>Id Test Link</a>"
  );
});

// through id
router.get("/test/:id", function (request, response) {
  response.send(response.send(request.params.id));
});

module.exports = router;

*/
// admin page to different its different page

var express = require("express");
const router = express.Router();
// home page
router.get("/", function (request, response) {
  var link = "<a href='/admin'>Home</a><br>";
  link += "<a href='/admin/change_pass'>Change Password</a><br>";
  link += "<a href='/admin/contact'>Contact</a><br>";
  link += "<a href='/admin/logout'>Logout</a><br>";
  link += "<h1>Home Page</h1>";
  response.send(link);
});
//change pass page
router.get("/change_pass", function (request, response) {
  var link = "<a href='/admin'>Home</a><br>";
  link += "<a href='/admin/change_pass'>Change Password</a><br>";
  link += "<a href='/admin/contact'>Contact</a><br>";
  link += "<a href='/admin/logout'>Logout</a><br>";
  link += "<h1>Change Password Page</h1>";
  response.send(link);
});
//contact page
router.get("/contact", function (request, response) {
  var link = "<a href='/admin'>Home</a><br>";
  link += "<a href='/admin/change_pass'>Change Password</a><br>";
  link += "<a href='/admin/contact'>Contact</a><br>";
  link += "<a href='/admin/logout'>Logout</a><br>";
  link += "<h1>Contact Page</h1>";
  response.send(link);
});
//logout page
router.get("/logout", function (request, response) {
  var link = "<a href='/admin'>Home</a><br>";
  link += "<a href='/admin/change_pass'>Change Password</a><br>";
  link += "<a href='/admin/contact'>Contact</a><br>";
  link += "<a href='/admin/logout'>Logout</a><br>";
  link += "<h1>Logout Page</h1>";
  response.send(link);
});

module.exports = router;
