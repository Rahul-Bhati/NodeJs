// Day 10 (to delete record)
const express = require("express");
const app = express();

const mysql = require("mysql");

const bodyParser = require("body-parser");
const {
  UCS2_GENERAL_MYSQL500_CI,
} = require("mysql/lib/protocol/constants/charsets");
const { request } = require("express");

app.set("view engine", "pug");
app.set("views", "./view");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (request, response) {
  var conn = mysql.createConnection({
    host: "localhost",user: "root",password: "",database: "cet",
  });
  conn.connect(function (err) {
    if (err) throw err;
    conn.query("select * from student", function (err, result) {
      if (err) console.log("Try Again");
      else 
        response.render("Day10", { stud: result });
    });
  });
});

// to display message
app.get("/msg/:id", function (req, res) {
  var msg = req.params.id;
  if (msg == "del_success") res.send("Record Deleted Successfully");
  else if (msg == "not_exist") res.send("Record Not Existed");
});


// to delete the record
app.get("/delete/:id", function (request, response) {
  var conn = mysql.createConnection({host: "localhost",user: "root",password: "",database: "cet",});
  conn.connect(function (err) {
    var id = request.params.id;
    if (err) throw err;
    // console.log("Database Connected");
    conn.query("delete from student where sn=" + id, function (err, result) {
      if (err) console.log("Try Again");
      else {
        console.log(result.affectedRows + " Delete");
        if (result.affectedRows > 0) response.redirect("/msg/del_success");
        else response.redirect("/msg/not_exist");
      }
    });
  });
});

app.listen(5000);
