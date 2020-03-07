const express = require('express');
const app = express();

const db = require('./database/db.js');
const {Album}=require('./models/album.js');
const {Band}=require('./models/band.js');
const {Song}=require('./models/song.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.post('/bands',(req,res)=>{
    Band.findOne({"name":req.body.name})
    .exec((error,results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results==null){
               let band = new Band(req.body);
                band.save(error =>{
                    if(error){
                        res.status(500).send(error);
                    }
                    else{
                        let message={
                            text:"Successfully create new band",
                            data:band
                        };
                        res.status(201).send(message);
                    }
                });  
                
            }
            else{
                let message={
                    text:"This band name exist",
                   
                };
                res.status(201).send(message);
            }
        }
    });
    
});
app.post('/albums',(req,res)=>{
    Band.findOne({"name":req.body.band})
    .exec((error,results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results ==null){
                res.status(404).send("No Band with that name found");
            }
            else{
                 
                let album = new Album(req.body);
                album.save(error => {
                    if(error){
                        res.status(500).send(error);
                    }
                    else{
                        results.albums.push(album._id);
                        results.save(error => {
                            if(error){
                                res.status(500).send(error);
                            }
                            else{
                                let message={
                                text:"Successfully create new Album",
                                data:album
                                }
                                res.status(200).send(message);
                            }
                        });
                    }
                });
                
            }
        }
    });
    
});


app.post('/songs',(req,res)=>{
    
    Album.findOne({"name":req.body.album})
    .exec((error,results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results ==null){
                res.status(404).send("No Album with that name found");
            }
            else{
                
                let song = new Song(req.body);
                results.songs.push(song);
                results.save(error => {
                    if(error){
                        res.status(500).send(error);
                    }
                    else{
                        let message={
                            text:"Successfully create new Album",
                            data:song
                            }
                        res.status(200).send(message);
                    }
                });
                
            }
        }
    });
    
});



app.get('/albums',(req,res)=>{
   Album.find()
    .exec((error,results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length == 0){
                res.status(200).send("No Album found");
            }
            else{
                res.status(200).send(results);
            }
        }
    });
});
app.get('/bands',(req,res)=>{
    Band.find()
    .populate('albums')
    .exec((error,results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length == 0){
                res.status(200).send("No Band found");
            }
            else{
                res.status(200).send(results);
            }
        }
    });
});



db.once('open', ()=>{
    console.log('Connection to database successful!');
    app.listen(8080,()=>console.log('listening'));
});


db.once('SIGINT', ()=>{
    app.connection.close(()=>{
        console.log('Mongoose disconnected through app termination');
        db.exit(0);
    });
});