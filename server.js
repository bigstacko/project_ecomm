const express = require('express');
const bodyParser = require('body-parser');
// const connection = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Handle form submission
// app.post('/submit', (req, res) => {
//   const { name, email } = req.body;

//   const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
//   connection.query(sql, [name, email], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Database error');
//     }
//     res.send('Data inserted successfully');
//   });
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
