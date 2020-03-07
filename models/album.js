const mongoose = require('mongoose');
let Schema =mongoose.Schema;
const {songSchema, Song}=require('./song.js');



let albumSchema = new Schema({
    name:{type:String,  maxlength:30, required:true},
    genre:{type:String,  maxlength:30,required:false},
    songs: [songSchema] 
    
});
//convert schema into model.
module.exports.Album=mongoose.model('Album', albumSchema);