// Day 8 (Database Connectivity)
const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");
const {UCS2_GENERAL_MYSQL500_CI,} = require("mysql/lib/protocol/constants/charsets");
app.set("view engine", "pug");
app.set("views", "./view");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (request, response) {
  response.render("Lec9"); 
});
app.post("/submit", function (request, response) {
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cet",
  });
  conn.connect(function (err) {
    if (err) throw err;
    conn.query(
      "insert into student values("+request.body.roll+",'"+request.body.sname+"',"+request.body.avg+")",function (err, result) {
        if (err) console.log("Try Again");
        else {
          // console.log("Record Inserted");
          response.redirect("/record");
        }
      }
    );
  });
  conn.end;
});

app.listen(5000);
