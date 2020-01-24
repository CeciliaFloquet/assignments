let express = require('express');  
let app = express(); // Create the Express Application  
let path = require('path');

app.use(express.static('public')); 


app.get("/", (req, res)=> {  
  //res.send('hello Express world!');  
  res.sendFile(path.join(__dirname, 'public/pages', 'index.html'));
  
}); 

app.get("/about", (req,res)=>{ 
   //res.sendFile('/public/pages/about.html', {root: __dirname}); 
   res.sendFile(path.join(__dirname, 'public/pages', 'about.html'));
     
});

app.get(['/contact','/contact-us'], (req,res)=>{ 
    res.sendFile(path.join(__dirname, 'public/pages', 'contact.html'));
  
}); 

app.get("/home", (req,res)=>{ 
    res.redirect(301, '/');
     
});

let coworkers = ['Aggretsuko', 'Fenneko', 'Haida', 'Tsunoda', 'Kabae']; 
 
let friends = {     
    Kiiroitori: {       
        type:'bird',      
        description:'hard worker'     
      
    },     
    Rilakkuma: {       
        type:'bear',       
        description:'likes to relax'     
        
    },    
    Korilakkuma:{       
        type:'bear',       
        description:'has a big imagination'     
        
    }};
var objs = new Map();
objs.set("friends", friends);
objs.set("coworkers", coworkers);

app.get('/characters/:type', (req, res, next)=> {  
    let type =req.params.type;

    if (objs.has(type)) {
        res.send(objs.get(type));
    } else {
         next();
    }
}); 

app.get("/*", (req, res)=> {  
    res.status(404).sendFile(path.join(__dirname, 'public/pages', '404.html'));
  
}); 

app.set('port', process.env.PORT || 8080); // create a setting called 'port' , with value either equal to 8080, or whatever the PORT environment variable is on the server. 
 
let server = app.listen(app.settings.port, () => {     
    console.log('Server ready on ', app.settings.port); 
    
});// create the server and start it up. Print a message to the console letting us know it's working