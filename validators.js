const {check} = require('express-validator');
const{query} =require('express-validator');
 
exports.heroesValidators= [
    check('name','please enter a valid name')  
    .isLength({min:1,max:30})
    .trim()
    .escape()
    ,
    check('email','please enter a valid email')  
    .isEmail()
    .trim()
    .escape()
    ,
    check('powers','please check at least 2 powers') 
    .not().isEmpty()
    .isArray()
    .customSanitizer(value=>{
        if(typeof value == "object" && value.length >1){
            value.forEach((element)=>{
                
                check('value').escape(element);
                
            })
        }
        return value;
         
    })
];        
        

exports.colorValidators=[
    query('color','please enter a valid color')
    .customSanitizer(value=>{

        if(typeof value === "undefined"){
            value="#000000";
        }
        return value;
    })
    .isHexColor()
    .trim()
    .escape()
];

