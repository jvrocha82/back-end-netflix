const mongoose = require('../config/database')

const Schema = mongoose.Schema;

const movie = new Schema({
    id:Number,
    name:String,  
    title:String,
    poster_path:String,
    original_title,
    genres:{
        name:string,
    }
})
module.exports = mongoose.model('Movie', movie)