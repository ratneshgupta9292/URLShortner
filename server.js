const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./db');
const { urlshorterController } = require("../URLShortner/Controllers/UrlController");
// Load environment variables from .env
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
//app.use(bodyParser.json());
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

  // rendering the ejs file
  app.get('/',(req,res)=>{
    res.render("index.ejs", {shortUrl :null})
  })
app.post("/short", urlshorterController);
// Start listening
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});