let express = require("express");
let app = express()
let bodyparser = require("body-parser")

let dbconnaction = require("./config/connaction")


const fs = require('fs')

app.use(express.json())






//insert query
app.post('/user', function(req, res) {
    let user = req.body;
    if (!user) {
        return res.status(400).send({ error: true, message: 'Please provide user' });
    }
    dbconnaction.query("INSERT INTO users SET ? ", { user: user }, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });
});





// Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/learners', (req, res) => {
    dbconnaction.query('SELECT *FROM Companies WHERE address = "indore"', (err, rows) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


app.get('/learners/:id', (req, res) => {
    dbconnaction.query('SELECT * FROM Companies WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});



app.post("/addCompanies", (req, res) => {

    const { name, email, phone, address, id, age, s } = req.body

    console.log(req.body, "DDDD");
    var sql = `INSERT INTO Companies (id, name, address,email,phone,age,s) VALUES ('${id}','${name}','${address}','${email}','${phone}','${age}','${s}')`;

    // var sql = "INSERT INTO Companies (id, name, address,email,phone,age,s) VALUES ('" +
    //     id + "', '" +
    //     name +
    //     "', '" + address + "','" +
    //     email + "','" +
    //     phone + "','" +
    //     age + "','" +
    //     s + "')";
    dbconnaction.query(sql, function(err, result) {
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

})





// CALLAGES TABLE 
app.post("/addColleges", (req, res) => {

    const { college_id, college_code, college_name } = req.body

    console.log(req.body, "DDDD");
    var sql = `INSERT INTO Colleges (college_id, college_code, college_name) VALUES ('${college_id}','${college_code}','${college_name}')`;
    dbconnaction.query(sql, function(err, result) {
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

})


//PERSON 
app.post("/addPersons", (req, res) => {

    const { ID, LastName, FirstName, Age } = req.body

    console.log(req.body, "DDDD");
    var sql = `INSERT INTO Persons(ID, LastName, FirstName,Age) VALUES ('${ID}','${LastName}','${FirstName}','${Age}')`;
    dbconnaction.query(sql, function(err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "person details added successfully"
            })
        }
        console.log("1 record inserted", result);
    });

})

app.post("/addOrders", (req, res) => {

    const { OrderNumber, ID } = req.body
    console.log(req.body);
    var sql = `INSERT INTO Orders(OrderNumber,ID) VALUES ('${OrderNumber}','${ID}')`
    dbconnaction.query(sql, function(err, result) {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "Orders data completed"
            })
        }
        console.log("record is insert", result);
    })


})


app.delete("/deleteCompanies/:id", (req, res) => {
    let sql = `DELETE FROM Companies WHERE id = ?`;
    let compnayid = (req.params.id)

    // delete a row with id 1
    dbconnaction.query(sql, compnayid, (error, results) => {
        if (error) {
            res.json({
                code: 400,
                msg: error
            })
        } else {
            res.json({
                code: 200,
                msg: "compnay delet succesfully"
            })
        }
    });

})

app.post("\addOrders", (req, res) => {
    const { OrderNumber, ID } = req.body
    console.log(req.body);
    var sql = `INSERT INTO Orders(OrderNumber, ID) VALUES('${OrderNumber}','${ID}')`
    dbconnaction.query(sql, function(err, result) {

        if (err) {
            res.json({
                code: 200,
                msg: err

            })
        } else {
            res.json({
                code: 400,
                msg: "data insert in orders"
            })
        }
        console.log("record is insert", result);
    })
})


//Router to INSERT/POST a learner's detail
app.post('/learners', (req, res) => {
    let learner = req.body;
    var sql = "SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; "
        // CALL learnerAddOrEdit(@learner_id, @learner_name, @learner_email, @course_Id);
        // ";
    mysqlConnection.query(sql, [learner.learner_id, learner.learner_name, learner.learner_email, learner.course_Id], (err, rows, fields) => {
        if (!err)
            rows.forEach(element => {
                if (element.constructor == Array)
                    res.send('New Learner ID : ' + element[0].learner_id);
            });
        else
            console.log(err);
    });
});


// //use in
// dbconnaction = require("./config/connaction")

// const fs = require('fs')

// app.use(express.json())

// //Creating GET Router to fetch all the learner details from the MySQL Database
// app.get('/In', (req, res) => {
//     dbconnaction.query('SELECT name, address FROM Companies WHERE address IN ("indore","dewas")', (err, rows) => {
//         if (!err)
//             res.send(rows);
//         else
//             console.log(err);
//     })
// });




// practice
app.delete("/deleteOrders/:id", (req, res) => {
    let sql = `DELETE FROME Orders WHERE id  = ?`;
    let compnayid = (req.params.id)
    dbconnaction.query(sql, compnayid, (error, result) => {
        if (error) {
            res.json({
                code: 400,
                msg: error

            })
        } else {
            res.json({
                code: 200,
                msg: 'delete succesfully'
            })

        }

    });
})





app.delete("/deleteCompanies/:id", (req, res) => {
    let sql = `DELETE FROM Companies WHERE id = ?`;
    let compnayid = (req.params.id)

    // delete a row with id 1
    dbconnaction.query(sql, compnayid, (error, results) => {
        if (error) {
            res.json({
                code: 400,
                msg: error
            })
        } else {
            res.json({
                code: 200,
                msg: "compnay delet succesfully"
            })
        }
    });

})

app.get('/learn', (req, res) => {
    dbconnaction.query('SELECT* FROM Companies WHERE address="indore"', (err, row) => {
        if (!err) {
            res.send(row);
        } else {
            res.send(err)
            console.log(err);
        }
    })
})




app.get("/jituget", (req, res) => {
    dbconnaction.query('SELECT * FROM Colleges WHERE college_id=24', (err, row) => {
        if (!err) {
            res.send(row);
        } else {
            res.send(err)
            console.log(err);
        }

    })
})



app.get('/shiv', (req, res) => {
    dbconnaction.query('SELECT * FROM Customers WHERE ID=2', (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(row)
            console.log(err);
        }
    })
})



app.get('/shiv/:id', (req, res) => {
    dbconnaction.query('SELECT * FROM Customers WHERE ID=?', [req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(row)
            console.log(err);
        }
    })
})




app.put('/update_customer/:id', (req, res) => {
    console.log(req.body);
    let firstname = req.body.FirstName
    dbconnaction.query('UPDATE Customers SET first_name=? WHERE id=?', [firstname, req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(err)
            console.log(row);
        }
    })

})



app.put('/update_customer/:id', (req, res) => {
    console.log(req.body);
    let firstname = req.body.FirstName
    dbconnaction.query('UPDATE Customers SET first_name=?,last_name=?,age=?,country=? WHERE id=?', [firstname, req.params.id], [last_name, req.params.id], [age, req.params.id], [country, req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(err)
            console.log(row);
        }
    })

})






//crud operation
app.post('/postPersons', (req, res) => {
    const { LastName, FirstName, ID, Age } = req.body
    console.log(req.body, "ssss");

    var sql = `INSERT INTO Orders(ID, LastName, FirstName, Age) VALUES('${ID}', '${LastName}', '${FirstName}', '${Age}')`;

    dbconnaction.query(sql, (err, result) => {
        if (err) {
            res.json({
                code: 400,
                msg: err
            })
        } else {
            res.json({
                code: 200,
                msg: "succes "
            })
            console.log("record inter.reault ");

        }
    });
})

app.get('/getPersons/:id', (req, res) => {
    dbconnaction.query('SELECT * FROM Persons WHERE ID=?', [req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(err)
            console.log(err);
        }
    })
})


app.delete('/deletePersons/:id', (req, res) => {
    let sql = 'DELETE FROM Persons WHERE id=?';
    dbconnaction.query(sql, (req.params.id), (error, result) => {
        if (error) {
            res.json({
                code: 400,
                msg: error
            })
        } else {
            resjson({
                code: 200,
                msg: "delete success"
            })
        }
    })
})


app.put('/updatePersons/:id', (req, res) => {
    console.log(req.body);
    let { FirstName } = req.body
    dbconnaction.query(`UPDATE Persons SET FirstName = '${FirstName}'  WHERE ID = ? `, [req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(err),
                console.log(row);
        }
    })
})


app.listen(5000, function() {
    console.log("server is listning on 5000 port")
})