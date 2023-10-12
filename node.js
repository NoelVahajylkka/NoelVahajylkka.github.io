const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Porkkana123',
  database: 'website'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

// API endpoints for comments
app.use(express.json());

app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  const timestamp = new Date();

  const comment = { author, text, timestamp };

  db.query('INSERT INTO comments SET ?', comment, (err, result) => {
    if (err) throw err;
    res.json(comment);
  });
});

app.get('/comments', (req, res) => {
  db.query('SELECT * FROM comments', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
