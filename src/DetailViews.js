import React from 'react'; 
import Details from './Details.js';
import App from './App.js';
import dog from './App.js';

class DetailViews extends React.Component { 
    constructor(props) {       
        super(props);              
        
    }
    
    render() {
      
        return <>
                    <div className="comments">
                        <h2>User Comments </h2>
                          {this.props.comments.map(com=><li key={com}>{com}</li>)}
                    </div>
                     <h2>Images </h2>
                     <div className="images">
                        {this.props.images.slice(0,this.props.number).map(img => (
                            <img src={img} key={img} /> 
                        ))} 
                       
                    </div>
             </>
        
        
    } 
} 
export default DetailViews; 