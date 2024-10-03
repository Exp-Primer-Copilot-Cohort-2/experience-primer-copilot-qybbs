// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Use comments.js
const comments = require('./comments');