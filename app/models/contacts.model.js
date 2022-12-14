const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true},
    address:{type: String, required:true},
    phone:{type: String, required:true},
    favorite:{type: Boolean, required:true},
});

module.exports = mongoose.model('Contact', contactSchema);
