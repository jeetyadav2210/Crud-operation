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



// function shef(quote, callback) {
//     var myQuote = "your order is ready," + quote;
//     callback(myQuote);
// }


// function waiter(quote) {
//     console.log(quote);
//     shef(quote, function(data) {
//         console.log(data);
//     });

// }
// waiter("my order is pizza");



const { name, email, phone_number, Date, time, number_of_people, message } = req.body

console.log(req.body, "DDDD");
var sql = "INSERT INTO booktable (name, email, phone_number,Date,time,number_of_people,message) VALUES ('" +
    name + "', '" +
    email +
    "', '" + phone_number + "','" +
    Date + "','" +
    time + "','" +
    number_of_people + "','" +
    message + "')";
db.query(sql, function(err, result) {
    if (err) {
        res.json({
            code: 400,
            msg: err
        })
    } else {
        res.json({
            code: 200,
            msg: "table book successfully"
        })
    }
    console.log("1 record inserted", result);
});



// Deleting Data in MySQL from Node.js
https: //www.mysqltutorial.org


    nodeProject.zip