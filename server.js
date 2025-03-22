// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
// Configure express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// GET Route to retrieve projectData
app.get('/api/projectdata', (req, res) => {
  res.status(200).json(projectData);
});

// POST Route to store date, temp, and user input in projectData
app.post('/api/projectdata', (req, res) => {
  const { date, temp, content } = req.body;
  projectData = {
    date,
    temp,
    content,
  };
  res.status(201).json({ message: 'Data added successfully!' });
});

// Setup Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});