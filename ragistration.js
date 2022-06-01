app.post('/postPersons', (req, res) => {
    const { OrderID, OrderNumber, ID } = req.body
    console.log(req.body, "ssss");
    var sql = `INSERT INTO Orders (ID,LastName,FirstName,Age) VALUES('${ID}','${LastName}', '${FirstName}','${Age}')`;

    dbconnaction.query(sql, function(err, result) {
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
    let sql = 'DELETE FROM Persons WHERE id=?' (req.params.id);
    dbconnaction.query(sql, (error, result) => {
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
    let collage_name = req.body.college_name
    dbconnaction.query('UPDATE Persons SET FirstName,WHHERE ID =?' [req.params.ID], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(err),
                console.log(row);
        }
    })
})