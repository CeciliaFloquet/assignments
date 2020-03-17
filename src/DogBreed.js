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
                    <li >{this.props.dogBreed.map(db=><h2 style={styleOject}key={db}>{db}</h2>)}
                    </li>
              </>
    }
}
export default DogBreed ;
