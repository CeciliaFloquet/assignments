const express = require ('express');
const app = express();


app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true})); 
//const hero=[];




const {colorValidators} = require('./validators.js');
const {heroesValidators} = require('./validators.js');
const {validationResult} = require('express-validator');

app.post('/heroes', heroesValidators, (req,res)=>{
    
    const valErrors = validationResult(req).array();
    
    if(valErrors.length != 0){
        res.status(422).send(valErrors);
    }
    else{
        res.render('heroes-success', {  
            hero: req.body        
        }); 
    }
    
});




app.get('/', colorValidators, (req,res)=>{
    const valErrors = validationResult(req).array();
    
    
    if(valErrors.length != 0){
      
        res.status(422).send(valErrors);
    }
    else{
        
        const col =req.query;
        res.render('index', {color: col.color}); 
     
    }
});




//server port 8080
app.set('port', process.env.PORT || 8080)
const server =app.listen(app.settings.port, ()=> {
    console.log("Listening on", app.settings.port);
});