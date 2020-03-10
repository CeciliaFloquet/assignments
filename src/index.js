import axios from "axios";
import "./style.css";
import {refreshAllFilms, refreshFeaturedFilm} from "./rendering.js";
refreshAllFilms(); 
refreshFeaturedFilm(); 
const formsubmit = (event)=>{
    event.preventDefault();

    let newFilm={
        title:document.getElementById('form-title').value,
        summary:document.getElementById('form-summary').value
    };
    axios.post('/api/films', newFilm)     
    .then(results=>{
        refreshFeaturedFilm();
        refreshAllFilms();
        
        
    })
    .catch(error=>{console.log(error)});

};
let form = document.getElementById('form');
form.addEventListener('submit',formsubmit);