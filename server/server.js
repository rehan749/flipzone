const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json())
const port = 5000;

app.use(bodyParser.json());
app.use('/', userRoutes); // Use '/singup' as the endpoint for user routes

// 


app.get("/", (req, res) => {
    res.send("Hello, this is the Node.js server");
});

app.listen(port, () => {
    console.log(`backend server js running ${port}`);
});
