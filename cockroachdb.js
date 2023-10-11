const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();
const port = process.env.PORT || 3000; // You can change the port as needed

const db = pgp({
  connectionString: 'postgresql://kommentoija:<testisalis2>@terra-puma-10917.8nj.cockroachlabs.cloud:26257/comments?sslmode=verify-full'
  // Replace 'your_database_connection_string' with the actual connection string
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit_comment', (req, res) => {
  const { name, email, comment } = req.body;

  db.none('INSERT INTO comments(name, email, comment) VALUES($1, $2, $3)', [name, email, comment])
    .then(() => {
      res.send('Comment submitted successfully.');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: Could not submit comment.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
