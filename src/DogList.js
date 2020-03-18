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
                    </ul>;
                </>; 
    } 
} 
export default DogList; 





