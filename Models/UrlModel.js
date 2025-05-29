const mongoose = require('mongoose');
// Define the User schema
const userSchema = new mongoose.Schema({
    shorCode: {
        type: String,
    },
    longurl: {
        type: String
    }
});

// Export the model
const Url = mongoose.model('shortURL', userSchema);
module.exports = Url;
