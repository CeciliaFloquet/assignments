const mongoose = require('mongoose');
let Schema =mongoose.Schema;
const {Song}=require('./song.js');



let albumSchema = new Schema({
    name:{type:String,  maxlength:30, required:true},
    genre:{type:String,  maxlength:30,required:false},
    songs: [{type:Schema.Types.Object, ref:'Song'}] 
    
});
//convert schema into model.
module.exports.Album=mongoose.model('Album', albumSchema);