import express from 'express'
//import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from "./Controllers/UrlController.js";
import { connectDb } from './db.js';
const app = express();

app.use(express.urlencoded({ extended: true }))
// rendering the ejs file // rendering the ejs file
app.get('/', (req, res) => {
  res.render("index.ejs", { shortUrl: null })
});
connectDb();
// shorting url logic
app.post('/short', shortUrl);

app.get('/:shortCode', getOriginalUrl)

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
