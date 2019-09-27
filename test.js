const express = require("express");
var bodyParser = require("body-parser");

const requ = require("request");
var cheerio = require("cheerio");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var map = new Array();
var m;
i = 0;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE");
  res.header("Access-Control-Allow-Header", "Content-Type");
  next();
});

global.site_header_value = "site_header";
global.city_value = "";
global.city_info = "";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(city_value);
});

app
  .get("/info", (req, res) => {
    let city = req.query.city;
    city_value = city;

    requ(`https://www.goibibo.com/`, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        console.log("So far so good ...");
        ///// Using cheerio to fetch the site details//////
        const $ = cheerio.load(html);
        ///// '$' will be used as a reference to getting all website details ///////
        //console.log($.text());
        document.getElementById("react-autosuggest-1-suggestion--0")
        city_info = $("#react-autosuggest-1-suggestion--0");
        res.send(city_info);
        //console.log(city_value);
      }
    });

    console.log(city_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });
