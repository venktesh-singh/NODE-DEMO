const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})



const AssignTask = mongoose.model('AssignTask', assignSchema);

module.exports = AssignTask;