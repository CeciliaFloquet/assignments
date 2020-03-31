const Animal = require('../models/Animal.js'); 
 
exports.getAnimals = (req,res, next)=>{    
    Animal.find()
    .exec()     
    .then(results=>{         
        res.send(results);     
        
    })     
    .catch(error=>next(error)); 
    
};
 
exports.getAnimal = (req,res, next)=>{     
    Animal.find({'name':req.params.name})
    .exec()     
    .then(results=>{         
        res.send(results);     
        
    })     
    .catch(error=>next(error)); 
    
};
 
exports.postAnimals = (req,res,next)=>{          
    let newAnimal = new Animal(req.body);          
    newAnimal.save()     
    .then(()=>{         
        res.status(201).send(newAnimal);     
        
    })     
    .catch(error=>next(error)); 
    
};
 