require('dotenv').config(); 
const express = require('express');
const app = express();

const connection = require('./db/connection.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const Film = require('./models/film.js');

app.post('/api/films', (req,res)=>{

    // TODO
    let film= new Film(req.body);
    film.save(error =>{
        if(error){
            res.status(500).send(error);
        }
        else{
            let message={
                text:"Successfully create new band",
                data:film
            };
            res.status(201).send(film);
            }
    }); 
})

app.get('/api/films', (req,res)=>{
    // TODO
    //console.log(Film);
    Film.find()
    .exec((error,results)=>{
        //console.log(results);
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length == 0){
                res.status(200).send("No film found");
            }
            else{
                //console.log(results);
                res.status(200).send(results);
            }
        }
    });
    
});

connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8080, ()=>{
    console.log("Connected and listening");
    });
});
