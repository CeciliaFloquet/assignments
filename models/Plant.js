const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
    name:{type:String, required:true},
});

const Plant = mongoose.model("Plant", PlantSchema);

module.exports = Plant;