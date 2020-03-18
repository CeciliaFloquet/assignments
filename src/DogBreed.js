import axios from 'axios';
import React from 'react'; 
import DogList from './DogList.js';

class DogBreed extends React.Component { 
    constructor(props) {       
        super(props);              
       
    }
    render() {   
        
        let styleOject={
            border: "2px solid black",
            padding:"1rem",
            borderRadius: "5px",
            display:"inline-block",
            margin: "10px",
            backgroundColor:"lightblue"
            
        };
       
        return <>
                    {this.props.dogBreed.map(db=><li style={styleOject} key={db}>{db}</li>)}
                    
              </>
    }
    
        
}
export default DogBreed ;
