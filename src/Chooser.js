import React from 'react'; 

import App from './App.js';
import dog from './App.js';

class Chooser extends React.Component { 
    constructor(props) {       
        super(props);              
        
    }
    
    render() {
      
        return <div className="chooser">
                    <h2>Choose a dog</h2>
                       
                         {this.props.dogs.map(dog=><ul key={dog}><button onClick={()=>this.props.chooseDog(dog)}  key={dog}>{dog}</button></ul>)}
                        
                </div>;
    } 
} 
export default Chooser; 