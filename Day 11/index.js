// Day 11 Edit and Update record.
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
        response.render("Day11", { stud: result });
    });
  });
  conn.end;
});

// to update message
app.get("/msg/:id", function (req, res) {
  var msg = req.params.id;
  if (msg == "update_success") res.send("Record Updated Successfully");
  else if (msg == "not_exist") res.send("Record Not Existed");
});

// to edit record
app.get("/edit/:id", function (request, response) {
  var conn = mysql.createConnection({host: "localhost",user: "root",password: "",database: "cet",});
  conn.connect(function (err) {
    var id = request.params.id;
    if (err) throw err;
    conn.query("select * from student where sn=" + id, function (err, result) {
      if (err) console.log("Try Again");
      else
        response.render("edit",{stud:result});
    });
  });
  conn.end;
});
// to update the record
app.post("/update/:id", function (request, response) {
  var conn = mysql.createConnection({host: "localhost", user: "root", password: "", database: "cet",});
  conn.connect(function (err) {
    var id = request.params.id;
    var name = request.body.sname ;
    var avg = request.body.avg ;
    if (err) throw err;
    conn.query("update student set sname='"+name+"', avgr="+avg+" where sn=" +id,function (err, result) {
        if (err) console.log("Try Again");
        else response.redirect("/msg/update_success");});
  });
  conn.end;
});

app.listen(5000);
