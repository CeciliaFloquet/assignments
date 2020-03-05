const mongoose = require('mongoose');

let Schema =mongoose.Schema;

let bandSchema = new Schema({
    name:{type:String,  maxlength:30, required:true},
    albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }] 
    
});
//convert schema into model.
exports.Band=mongoose.model('Band', bandSchema);