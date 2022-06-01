"use strict";

// console.log("shivani");
// function excute() {
//     if (5 == 5) {
//         console.log("excute");
//     } else {
//         console.log("not excute");
//     }
//     // excute()
//     // console.log("last run");
// }
// excute()
// console.log("last run");
// function logQuote(quote) {
//     console.log(quote);
// }
// function createQuote(quote, callback) {
//     var myQuote = "Like I always say, " + quote;
//     callback(myQuote); // 2
// }
// function logQuote(Quote) {
//     // console.log(quote);
//     createQuote("eat your vegetables!", function(data) {
//         console.log(data)
//     }); // 1
// }
// logQuote("eat your vegetables!");
// // 1function serverRequest(query, callback){
// setTimeout(function() {
//     var response = query + "full!";
//     callback(response);
// }, 5000);
// function getResults(results) {
//     console.log("Response from the server: " + results);
// }
// getResults("results")
// serverRequest("The glass is half ", getResults);
function shef(quote, callback) {
  var myQuote = "your order is ready," + quote;
  callback(myQuote);
}

function waiter(quote) {
  console.log(quote);
  shef(quote, function (data) {
    console.log(data);
  });
}

waiter("my order is pizza");