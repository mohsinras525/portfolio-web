const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologystack: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    dummyemail: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Project', projectSchema)