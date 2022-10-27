const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "medziai",
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//Read Node
app.get('/sodas', (req, res) => {
    const sql = `
        SELECT *
        FROM sodas
    `;
    con.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


//Create Node
app.post('/sodas', (req, res) => {
    const sql = `
        INSERT INTO sodas
        (id, name, class, height)
        VALUES (?, ?, ?, ?)
    `;
    con.query(sql, [
        req.body.id,
        req.body.name,
        req.body.class,
        req.body.height
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Update Node
app.put('/sodas/:id', (req, res) => {
    const sql = `
        UPDATE sodas
        SET id = ?, name = ?, class = ?, height = ?
        WHERE id = ?
    `;
    con.query(sql, [
        req.body.id,
        req.body.name,
        req.body.class,
        req.body.height,
        req.params.id
    ], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Delete Node
app.delete('/sodas/:id', (req, res) => {
    const sql = `
        DELETE FROM sodas
        WHERE id = ?
        `;
    con.query(sql, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})


//Filter Node
app.get('/sodas-filter/:t', (req, res) => {
    const sql = `
        SELECT *
        FROM sodas
        WHERE th = ?
    `;
    
    con.query(sql, [req.params.t], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})

//Search Node
app.get('/sodas-key', (req, res) => {
    const sql = `
        SELECT *
        FROM sodas
        WHERE class LIKE ?
    `;
    con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
        if (err) {
            throw err;
        }
        res.send(results);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});