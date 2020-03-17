import React from 'react'; 
import axios from 'axios';
import DogBreed from './DogBreed.js';

class DogList extends React.Component { 
    constructor(props) {       
        super(props);              
        this.state={           
            dogBreeds:[]       
        };
        
    }
    componentDidMount() {      
        // This code will be run immediately after the component is created.      
        // Use Axios to load data from Dog API  
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(results=>{
            
            this.setState({           
                dogBreeds: Object.keys(results.data.message)  
            });
        
        
        })
        .catch(error=>{console.log(error)});
       
    } 
 
    render() {
      
        return <>
                    <ul className="breed-list">
                       
                       <DogBreed dogBreed={this.state.dogBreeds}/>
                       
                    </ul>
                </>; 
        
        //<ul className="breed-list">{this.state.dogBreeds.map(db=><li key={db}>{db}</li>)}</ul>; 
    
        
    } 
    
} 
 
export default DogList; 