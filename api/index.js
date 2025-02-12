const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: '../assets/uploaded/'});

const PORT = 3000;
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'demo_clothing_site'
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL: ", err);
        return;
    }
    console.log("Connected to MySQL");
});

app.use("/products", (req, res) => {
    const id = req.query.id;
    let statement = 'SELECT * FROM products';
    if (id) {
        statement += ` WHERE id=${id}`;
    }
    db.query(statement, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        
        res.json(id ? results[0] : results); // There should only be one result if searching with ID
    });
});

app.use("/delete", (req, res) => {
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'ID not specified' });
    let statement = `DELETE FROM products WHERE id=${id}`;
    db.query(statement, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        
        res.json(results);
    });
});

app.use("/create", upload.single('image'), (req, res, next) => {
    const extension = req.file.originalname.split(".")[1];
    let statement = `INSERT INTO PRODUCTS (title, image, price) VALUES ('${req.body.title}', '${req.file.filename}', ${req.body.price});`;
    db.query(statement, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});