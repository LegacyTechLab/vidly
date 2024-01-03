const mongoose = require("mongoose")
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {
        type : String,
        required: true,
        minLength : 2,
        maxLength : 30
    },
    createdAt: {
        type: Date,
        default : Date.now()
    },
    updatedAt : {
        type: Date
    }
})


module.exports = mongoose.model("genres",genreSchema)