

const express = require('express');
const app = express();
const router = require('./routes/index.js');
const connection = require('./db/connection.js');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// TODO - add routes to application
app.use('/api', router);


// error handler
app.use((error,req,res,next)=>{
    
    res.send(error);
})

connection.once('open', ()=>{
    console.log("connected");
    
    const server = app.listen(8080, ()=>{
        console.log("listening");
    });
})
