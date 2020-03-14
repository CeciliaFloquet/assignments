import axios from "axios";


const refreshAllFilms = ()=>{ 
   
        axios.get('/api/films')     
        .then(results=>{    
         console.log(results.data);
            const filmContainer= document.getElementById('all-films');
            filmContainer.innerHTML="";
           
           
             results.data.forEach(film=>{
               
                let newFilm = document.createElement('li');           
                newFilm.innerHTML = "<h2>" + film.title + "</h2>" + "<br>" + "<b>Summary:</b>" + "<p>"+ film.summary +"</p>"; 
                filmContainer.appendChild(newFilm); 
            
                
             });
            
        })     
        .catch(error=>{console.log(error)});
    
        
}; 
 //refreshAllFilms();
    
const randomFunc=()=>{
    axios.get('/api/films')     
        .then(results=>{    
            
            let container = document.getElementById('featured-film');  
            container.innerHTML = ""; 
            let t =new Array();
            
            results.data.forEach(Film=>{
               
                t.push(Film);
               
            });
            let lengthRandom=[Math.floor(t.length * Math.random())];
            container.innerHTML = "<div><h1>" + t[lengthRandom].title + "</h1>" + "<p>"+ t[lengthRandom].summary + "</p></div>"; 
            
        })     
        .catch(error=>{console.log(error)});
 }; 
  setInterval(refreshAllFilms, 3000);
const refreshFeaturedFilm = ()=>{ 
    randomFunc();
    setInterval(randomFunc, 3000);
   
    
};  
 
export {refreshAllFilms, refreshFeaturedFilm}; 