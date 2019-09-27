var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });

// nightmare
//   .goto("https://www.goibibo.com/")
//   .wait(1000)
//   .insert("input#gosuggest_inputSrc", "delhi")
//   .wait(2000)
//   //   .click("#react-autosuggest-1-suggestion--0")
//   //   .click("#react-autosuggest-1(3) a")
//   .evaluate(function(selector) {
//         var links = document.querySelectorAll(selector);
//         var passed = [];
//         for(var ii=0; ii<links.length; ii++) {
//           passed.push(links[ii].textContent);
//         }
//         return passed;
//       }, '#toc > ul > li.toclevel-1.tocsection-5 > ul > li')
//       .then(function(result) {
//         console.log(result); // Outputs length.
//       })

//   .catch(function(e) {
//     console.log(e);
//   });
//

nightmare
  .goto("https://www.goibibo.com/")
  // .mousedown("input#gosuggest_inputSrc")
  .wait()

  .type("input#gosuggest_inputSrc", "Delhi (DEL)")
  .type("input#gosuggest_inputDest", "Goa (GOI)")
  .wait(1000)

  .mousedown(`#react-autosuggest-1-suggestion--0`)
  .mousedown(`#react-autosuggest-1-suggestion--0`)

  .wait(2000)

  // .click("#departureCalendar")

  .click("#fare_20190920")

  // .wait(2000)

  .click("#adultPaxPlus")

  // .wait(2000)

  .select("input#gosuggest_inputSrc", "Delhi (DEL)")
  // .click("input#gosuggest_inputSrc")
  // .wait(2000)
  // .mousedown(`#react-autosuggest-1-suggestion--0`)
  // .type("input#gosuggest_inputDest", "Goa (GOI)")
  // .wait(1000)
  // .mousedown(`#react-autosuggest-1-suggestion--0`)

  // .click("#gi_search_btn")
  //.mousedown(`#react-autosuggest-1-suggestion--0`)

  // .evaluate(function() {
  //   // document.getElementById("#fare_20190920").click();
  //   // document.querySelectorAll(selector).click();
  //   var val = document.getElementById("input#gosuggest_inputSrc");
  //   console.log(val);
  //   // var links = document.querySelectorAll(selector);
  //   // var passed = [];
  //   // for (var ii = 0; ii < links.length; ii++) {
  //   //   passed.push(links[ii].textContent);
  //   // }
  //   // return passed;
  // }, "#fare_20190920")
  .then(function(result) {
    console.log(result); // Outputs length.
  })
  .catch(function(error) {
    console.error("Failed", error);
  });
