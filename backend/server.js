const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); 
const bodyParser = require('body-parser'); // Import body-parser
const app = express();

app.use(cors()); 
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agriventure'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});


app.post('/district', (req, res) => {
    const { crop, district, market } = req.body;

    let query = `SELECT AVG(price) AS predicted_price FROM price_prediction WHERE commodity = ? AND district = ? AND market = ?`;

    db.query(query, [crop, district, market], (err, results) => {
        if (err) {
            throw err;
        }
        if (results[0].predicted_price === null) {
            query = `SELECT AVG(price) AS predicted_price FROM price_prediction WHERE commodity = ? AND market = ?`;
            db.query(query, [crop, market], (err, results) => {
                if (err) {
                    throw err;
                }
                if (results[0].predicted_price === null) {
                    query = `SELECT AVG(price) AS predicted_price FROM price_prediction WHERE commodity = ?`;
                    db.query(query, [crop], (err, results) => {
                        if (err) {
                            throw err;
                        }
                        res.json({ predicted_price: results[0].predicted_price });
                    });
                } else {
                    res.json({ predicted_price: results[0].predicted_price });
                }
            });
        } else {
            res.json({ predicted_price: results[0].predicted_price });
        }
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
