const router = require('express').Router(); 
const {getPlants, getPlant, postPlants} = require('../controllers/plantController.js');
 
router.get('/', (req, res, next)=>{  
    // res.send(''); 
    getPlants(req, res, next);
    
}); 
router.get('/:name', (req, res, next)=>{  
    // res.send('TODO');
    getPlant(req, res, next);
    
}); 
router.post('/', (req, res, next)=>{  
    // res.send('TODO'); 
    postPlants(req, res, next);
    
}); 
 
const plantRouter = router; 
 
module.exports = plantRouter; 