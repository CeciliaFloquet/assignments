const express = require ('express');
const app = express();
const {animals} = require("./animals.json");
const pages = ["home","about","animals"];
let type;
app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/:page', (req,res, next)=>{
    type =req.params.page;
    
    res.render('index',{
        
        title: type,
        pages:pages,
        type:type,
        animals:animals
        
    });
   
});

app.get('/', (req,res)=>{
   
    res.redirect(301, '/home');
   
});

app.get('/favicon.ico',(req,res)=>{
    
    res.status(204).end();
});

app.get( '/template-parts/favicon.ico',(req,res)=>{
   
    res.status(204).end();
});

// This route handler is to catch any uncaught routes and produce a 404 error. 
app.get('*', (req,res,next)=>{      
    let error = new Error("There's nothing here!"); // create new error 
    // set its message and status here  
    error.status = 404;
    next(error);// send it to error handling middleware 
    
}); 

// This middleware is meant to handle any type off error. We'll use it for 404 and 500 errors. 
app.use((error, req, res, next)=>{ 
    //Error handler function.  Render an error page with the status code and status message of the caught error.  //Remember to set the status code of the response before sending.
    if(error.status != '404'){
        error.status=500;
    }
    res.render('template-parts/errors', {
       status: error.status,
       message: error.message
         
    } , (error, html) => {
         res.send(html);
    });
   
}); 


//server port 8080
app.set('port', process.env.PORT || 8080)
const server =app.listen(app.settings.port, ()=> {
    console.log("Listening on", app.settings.port);
});