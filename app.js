const express = require("express");
var bodyParser = require("body-parser");

const requ = require("request");
var cheerio = require("cheerio");
const puppeteer = require('puppeteer');


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
global.dcity_value = "";
global.dep = "";
global.ret = "";
global.adult_value = "";
global.child_value = "";
global.infant_value = "";
global.class_value = "";

global.city_info = "";
global.flight = "";

global.hotel = [];
global.plane = [];

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
  console.log(city_value);
});

app
  .get("/info", (req, res) => {
    let city = req.query.city;
    city_value = city;

    requ(
      `https://en.wikipedia.org/wiki/${city_value}`,
      (error, response, html) => {
        if (!error && response.statusCode == 200) {
          console.log("So far so good ...");
          ///// Using cheerio to fetch the site details//////
          const $ = cheerio.load(html);
          ///// '$' will be used as a reference to getting all website details ///////
          //console.log($.text());
          city_info = $("div p")
            .text()
            .replace(/\[.*?\]/g, " ");

          var city = [];

          city.push(city_info);

          res.send(city);
          //console.log(city_value);
        }
      }
    );

    console.log(city_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });


///////flight information


  app
  .get("/travel", (req, res) => {
    let city = req.query.city;
    let dcity = req.query.dcity;
    let dep_data = req.query.dep;
    let ret_data = req.query.ret;
    let adult = req.query.adult;
    let child = req.query.child;
    let infant = req.query.infant;
    let class_data = req.query.class;

//// http://localhost:8080/travel?city=lucknow&dcity=delhi&dep=20191011&ret=20191013&adult=1&child=0&infant=0&class=E

    city_value = city;
    dcity_value = dcity;
    dep = dep_data;
    ret = ret_data;
    adult_value = adult;
    child_value = child;
    infant_value = infant;
    class_value = class_data;

    
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  var src = city_value;
  var dest  =  dcity_value;
  var dep_date = dep;
  var ret_date = ret;
  var adult = adult_value;
  var children = child_value;
  var infant = infant_value;
  var fclass = class_value;
  var travel = [];

//   await page.goto("https://www.google.com/search?sxsrf=ACYBGNTZzZij6d6ch34fLPFRO5NSzT7ZQw:1570688437307&q=" + `${src}` + "+airport+code&sa=X&ved=2ahUKEwi01-6yhpHlAhXPfCsKHV8SAYwQ1QIoB3oECAoQCA&biw=1440&bih=662");

//   const code = await page.evaluate(() => {
//     return document.querySelector(`.Z0LcW`).textContent
//   });

// console.log(code); 
// travel.push(code);

// await page.goto("https://www.google.com/search?sxsrf=ACYBGNTZzZij6d6ch34fLPFRO5NSzT7ZQw:1570688437307&q=" + `${dest}` + "+airport+code&sa=X&ved=2ahUKEwi01-6yhpHlAhXPfCsKHV8SAYwQ1QIoB3oECAoQCA&biw=1440&bih=662");

//   const dcode = await page.evaluate(() => {
//     return document.querySelector(`.Z0LcW`).textContent
//   });

// console.log(dcode); 
// travel.push(dcode);

console.log(dep_date)

code = 'DEL';
dcode = 'GOI';

//await page.goto('https://www.goibibo.com/flights/air-' + `${code}` + '-' +  `${dcode}` + '-' + `${dep_date}` + '-' + `${ret_date}` + `-` + `${adult}` + `-`+ `${children}` + `-`+ `${infant}` + `-`+ `${fclass}` + `-`+ `D` + `-` + '/');
await page.goto('https://www.google.com/search?sxsrf=ACYBGNTAbwBTm6ihhz6HuOlAfjL6Sy9cfw%3A1570952190090&ei=_tOiXafbA4yVwgO9lpuYBw&q='+ `${src}` +'+to+ '+ `${dest}` +' +flight+round+trip&oq='+ `${dest}` +'+to+'+ `${src}` +'+round+flight&gs_l=psy-ab.3.0.0i8i30.2957.3875..5505...0.3..0.150.708.0j5......0....1..gws-wiz.......0i71j0i7i30j0i8i7i30.xOO--d0hlMI'); 
// console.log("req ok");
// console.log(code);
// console.log(dcode);
// console.log(dep_date);
// console.log("req ok");
// console.log("req ok");


//await page.goto('https://www.goibibo.com/flights/air-GOI-DEL-20191011-20191013-1-0-0-E-D/'); 
  // const price = await page.evaluate(() => {
  //   return document.querySelector(`[class = "gws-flights-results__collapsed-itinerary gws-flights-results__itinerary"]`).text()
  // });

  // console.log("price=" + price);
  // const dep_flight = await page.evaluate(() => {
  //   return document.querySelector(`[class = "db txtCenter greyLt ico11 padT5"]`).textContent
  // });
  // const ret_flight = await page.evaluate(() => {
  //   return document.querySelector(`[class = "db txtCenter greyLt ico11 padT5"]`).textContent
  // });   ///flexCol padL5

  
  // const other_data = await page.evaluate(() => {
  //   return document.querySelector(`[class = "flexCol padL5"]`).textContent
  // });  

  // var other_data = await page.evaluate(() => { 
  //   Array.from(document.querySelectorAll('[class = "flexCol padL5"]'))
  //     return other_data.map(td => {
  //        var txt = td.innerHTML;
  //        return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
  //     })

  //   });
    
    
//     var other_data = 
  
  
//     await page.evaluate(() => {
  
//       const tds = Array.from(document.querySelectorAll('[class = "flexCol padL5"]'))
//         return tds.map(td => {
//            var txt = td.textContent;
//            return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
//         });
//       });

    
//   console.log(price); 
//   console.log(ret_flight); 
//   travel.push(price);
//   travel.push(dep_flight);
//   travel.push(ret_flight);
//   travel.push(other_data);



//   console.log(other_data)

// //   flight = textContent;
//   res.send(travel);



const firm = await page.evaluate(() => {


  const tds = Array.from(document.querySelectorAll('[class = "WW7zhf"]'))
  return tds.map(td => {
     var txt = td.textContent;
     
     return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
  });

});

const time = await page.evaluate(() => {


  const tds = Array.from(document.querySelectorAll('[class = "hdSHM X0FtM"]'))
  return tds.map(td => {
     var txt = td.textContent;
     
     return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
  });

});

const rate = await page.evaluate(() => {


  const tds = Array.from(document.querySelectorAll('[class = "cUntLb"]'))
  return tds.map(td => {
     var txt = td.textContent;
     
     return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
  });

});
// const price = await page.evaluate(() => {
//   return document.querySelector(`[class = "a-no-hover-decoration"]`).textContent
// });

console.log(firm);
console.log(time);
console.log(rate);

plane.push(firm, time, rate);
res.send(plane)

plane = [];
  browser.close();
})();

    //console.log(city_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });



  ////// hotel information



  app
  .get("/hotel", (req, res) => {
    let city = req.query.city;
    
//// http://localhost:8080/travel?city=lucknow&dcity=delhi&dep=20191011&ret=20191013&adult=1&child=0&infant=0&class=E

    city_value = city;
   

    
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] } );
  const page = await browser.newPage();

  var src = city_value;


await page.goto('https://www.google.com/search?sxsrf=ACYBGNRPcRvGKM8uoYIGXK1NU1OPAqsIRw%3A1570868344241&ei=eIyhXfuNDtjf9QPrmrPQAg&q=hotel+booking+'+ `${city_value}` +'&oq=hotel+booking+noida&gs_l=psy-ab.3..0j0i22i30l9.4192.5320..5751...0.3..0.168.846.0j6......0....1..gws-wiz.......0i71j0i20i263j0i273.fimxAMHBuis&ved=0ahUKEwj7qZbNpJblAhXYb30KHWvNDCoQ4dUDCAs&uact=5');

//await page.goto('https://www.goibibo.com/flights/air-GOI-DEL-20191011-20191013-1-0-0-E-D/'); 
  var hotel_name = 
  
  
  await page.evaluate(() => {

    const tds = Array.from(document.querySelectorAll('[class = "BTPx6e bOYhNc"]'))
      return tds.map(td => {
         var txt = td.innerHTML;
         return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
      });

    // .forEach(element => {
      
    //     console.log(element);

    // }); // for testing do text()   dv1Q3e
  //dv1Q3e    BTPx6e bOYhNc   BQ5Rcc   

  });

  // var hotel_rate = 
  
  
  await page.evaluate(() => {

    const tds = Array.from(document.querySelectorAll('[class = "dv1Q3e"]'))
      return tds.map(td => {
         var txt = td.innerHTML;
         return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
      });

    });  

    var hotel_ratings = 
  
  
  await page.evaluate(() => {

    const tds = Array.from(document.querySelectorAll('[class = "WPPyQ Aq14fc"]'))
      return tds.map(td => {
         var txt = td.innerHTML;
         return txt.replace(/<a [^>]+>[^<]*<\/a>/g, '').trim();
      });

    });  
  // const hotel_2 = await page.evaluate(() => {
  //   return document.querySelector(`[id = ".0.1.1:$0.0.1.1.0.1.2.1.1"]`).textContent
  // });
  // const ret_flight = await page.evaluate(() => {
  //   return document.querySelector(`[class = "db txtCenter greyLt ico11 padT5"]`).textContent
  // });
  
  
  console.log(hotel_name); 
  console.log(hotel_rate); 
  console.log(hotel_ratings);
  // travel.push(textContent);
  // travel.push(dep_flight);
  // travel.push(ret_flight);

  var hotelName = {};
  var hotelRate = {};
  var hotelRatings = {};

  var key1 = "hotelName";
  var key2 = "hotelRate";
  var key3 = "hotelRatings";

  hotelName[key1] = [];

  hotelName[key1].push(hotel_name, hotel_rate, hotel_ratings);
  
  hotel = hotelName;
//   flight = textContent;





  res.send(hotel);
  

  browser.close();
})();

    //console.log(city_value);
  })
  .on("error", e => {
    console.error(`Got error: ${e.message}`);
  });
