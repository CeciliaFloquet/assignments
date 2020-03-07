const mongoose = require('mongoose');

let Schema =mongoose.Schema;

let songSchema = new Schema({
    name:{type:String,  maxlength:30, required:true}
    
});
//convert schema into model.
module.exports.Song=mongoose.model('Song', songSchema);
exports.songSchema=songSchema;
