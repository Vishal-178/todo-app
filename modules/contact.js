const mongoose = require('mongoose');

// creating schema for database

const contactSchema = new mongoose.Schema({
    // description is use to take string input
    description: {
        type: String,
        required: true
    },
    // select is used to select type of work(Catogery).
    select: {
        type: String,
        required: false
    },
    // date is used to select due date
    date: {
        type: String,
        required:false
    }
})

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;