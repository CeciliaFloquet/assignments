const router = require('express').Router(); 
 
const animalRouter = require('./animals.js'); 
const plantsRouter = require('./plants.js');
router.use('/animals', animalRouter); 
router.use('/plants', plantsRouter); 
 
module.exports = router; 