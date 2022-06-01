// INSERT INTO Companies(id, name, address, phone, email)
// VALUES
//     (6, 'Harry', 'Potter', 8349212145, 'USA@gmail.com');

const { application } = require("express");

// SELECT *
//     FROM Companies;

// INSERT INTO Companies(id, name, address, email, phone)
// VALUES
//     (7, 'pankaj', 'dewas', 'shiv@gmail.com', 8349212247),
//     (8, 'jitu', 'indore', 'Jeet@gmail.com', 8103556852),

//     UPDATE Companies
// SET address = 'indore'
// WHERE id = 8;
// DELETE FROM Companies
// WHERE id = 8;



SELECT *
    FROM Companies
WHERE id = 9;


SELECT *
    FROM Companies
ORDER BY NAME asc;


UPDATE Companies
SET address = 'indore'
WHERE id = 8;



SELECT *
    FROM Companies
WHERE id => 6 AND address = "indore";

SELECT *
    FROM Companies
WHERE address = "dewas"
OR email = jeet @gmail.com;

//add clumn
ALTER TABLE Companies
ADD s int;

ALTER TABLE Companies
MODIFY COLUMN shi VARCHAR(2);

//update all column
UPDATE Companies
SET age = 36
WHERE id = 7;

//rename culumn
ALTER TABLE Companies
Change umar age int;

//drop column name

ALTER TABLE Companies
DROP COLUMN s;


// use eequl to  
SELECT *
    FROM Companies
WHERE address = "indore"; //  api problem

//usee opraator
SELECT *
    FROM Companies
WHERE age > 25;


SELECT DISTINCT address
FROM Companies;

// as namme
SELECT address AS add
FROM Companies;

SELECT CONCAT(address, ' ', name) AS name
FROM Companies;

//use in
SELECT name, address
FROM Companies
WHERE address IN('indore', 'dewas'); // problem of calling 

//between
SELECT name, id
FROM Companies
WHERE id BETWEEN 6 AND 8;


SELECT name, id
FROM Companies
WHERE id NOT BETWEEN 6 AND 8;

SELECT name, id
FROM Companies
WHERE id NOT BETWEEN i AND l;

//min and max
SELECT MIN(age)
FROM Companies;

SELECT MAX(age)
FROM Companies;


SELECT MAX(age) AS max_age
FROM Companies;


SELECT MIN(name) AS min_name
FROM Companies;

SELECT *
    FROM Companies
WHERE age = (
    SELECT MIN(age) FROM Companies
);

//count
SELECT COUNT( * )
FROM Companies;


//LikeSELECT *
SELECT *
    FROM Companies
WHERE address LIKE 'indore';

//CREATE PRIMARY KEY
CREATE TABLE Colleges(
    college_id INT,
    college_code VARCHAR(20),
    college_name VARCHAR(50),
    CONSTRAINT CollegePK PRIMARY KEY(college_id, college_code)
);


//Creating FOREIGN Key
CREATE TABLE Customers(
    id INT,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    age INT,
    country VARCHAR(10),
    CONSTRAINT Customers PK PRIMARY KEY(id)
);

INSERT INTO Customers(id, first_name, last_name, age, country)
VALUES(22, "jeet", "yadav", 23, "india");

INSERT INTO Orders
VALUES
    (4, 354, 4);


DELETE FROM Persons
WHERE ID = 4;



//PRIMARY KEY using table 
CREATE TABLE Persons(
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY(ID)
);

//  FOREIGN KEY
CREATE TABLE Orders(
    OrderID int NOT NULL AUTO_INCREMENT,
    OrderNumber int NOT NULL,
    ID int,
    PRIMARY KEY(OrderID),
    FOREIGN KEY(ID) REFERENCES Persons(ID));

//inner join 
SELECT *
    FROM Persons
INNER JOIN Orders
ON Persons.ID = Orders.OrderID;

//left join
SELECT *
    FROM Persons
RIGHT JOIN Orders
ON Persons.ID = Orders.ID;

//
SELECT columns
FROM table1
FULL OUTER JOIN Orders
JOIN table2
ON table1.column_name = table2.column_name


app.get('/shiv/:id', (req, res) => {
    dbconnection.query('SELECT * FROM Customers WHERE ID=?', [req.params.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(row)
            console.log(row);
        }
    })
})

app.put('/jeet/:id', (req, res) => {

    dbconnection.query('UPDATE SET Customers WHERE ID=?', [req.param.id], (err, row) => {
        if (!err) {
            res.send(row)
        } else {
            res.send(row)
            console.log(row);
        }
    })

})


// (req.params.id, req.body, (err, emp) => {
//         if (err) {
//             return res.status(500).send({ error: "Problem with Updating the   Employee recored " })
//         };
//         res.send({ success: "Updation successfull" });