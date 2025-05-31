
import { Url } from "../Models/UrlModel.js";
import shortid from "shortid";
export const shortUrl = async (req, res) => {
    try {
        const longUrl = req.body.longUrl;

        const shortCode = shortid.generate();

        const shortUrl = `http://localhost:3000/${shortCode}`

        // save to database

        const newUrl = new Url({ longUrl, shortCode });
        await newUrl.save();

        console.log("Short url saved", newUrl);
        res.render("index.ejs", { shortUrl });
    } catch (err) {
        console.error("Error creating short URL:", err);
        res.status(500).json({ err: "Server error" });
    }
}

export const getOriginalUrl = async (req, res) => {
    

    try {
       const shortCode = req.params.shortCode;
        const originalurl = await Url.findOne({ shortCode });
//console.log(originalurl)
        if (originalurl) {
            // Redirect to the original long URL
            return res.redirect(originalurl.longUrl);
        } else {
            return res.status(404).json({ error: "Short URL not found" });
        }

    } catch (error) {
        console.error("Error creating short URL:", error);
        res.status(500).json({ error: "Server error" });
    }
}