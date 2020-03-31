const router = require('express').Router(); 
const {getAnimals, getAnimal, postAnimals} = require('../controllers/animalController.js');
 
router.get('/', (req, res, next)=>{  
    // res.send(''); 
    getAnimals(req, res, next);
    
}); 
router.get('/:name', (req, res, next)=>{  
    // res.send('TODO');
    getAnimal(req, res, next);
    
}); 
router.post('/', (req, res, next)=>{  
    // res.send('TODO'); 
    postAnimals(req, res, next);
    
}); 
 
const animalRouter = router; 
 
module.exports = animalRouter; 