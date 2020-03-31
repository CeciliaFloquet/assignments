const Plant = require('../models/Plant.js'); 
 
exports.getPlants = (req,res, next)=>{    
    Plant.find()
    .exec()     
    .then(results=>{         
        res.send(results);     
        
    })     
    .catch(error=>next(error)); 
    
};
 
exports.getPlant = (req,res, next)=>{     
    Plant.find({'name':req.params.name})
    .exec()     
    .then(results=>{         
        res.send(results);     
        
    })     
    .catch(error=>next(error)); 
    
};
 
exports.postPlants = (req,res,next)=>{          
    let newPlant = new Plant(req.body);          
    newPlant.save()     
    .then(()=>{         
        res.status(201).send(newPlant);     
        
    })     
    .catch(error=>next(error)); 
    
};