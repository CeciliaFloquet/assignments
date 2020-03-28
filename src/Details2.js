import React from 'react'; 
import axios from 'axios';
import App from './App.js';

class Details extends React.Component { 
    constructor(props) {
        super(props); 
        this.setState({
            
            images:[],
            number:1,
            newComment:"",
            comments:[]
            
        });
        
    }
    componentDidUpdate(prevProps, prevState) {  
        
        if(prevProps.current != this.props.current){
        
          
            axios.get(`https://dog.ceo/api/breed/${this.props.current}/images`)
            .then(results=>{
          
               
                this.setState({       
                    images:results.data.message
            
                })
              
                // console.log(this.state.images);
            })
            .catch(error=>console.log(error))
            
            
        }
    }
     
    // handleNumberChange(event) {  
        
    //     // TODO update the state to reflect the new number   
        
    // }
    
    // handleCommentChange(event) { 
 
    //      // Update newComment in state  
         
    // }  
    
    // handleCommentSubmit(event) { 
        
    //     event.preventDefault(); 
 
    //  // Post a new comment to '/comments'
     
    // } 
    
    render() {

  
        return <>
            <div className="details">
                    <h2> Details: {this.props.current}</h2>
                   
                    <form onSubmit={this.handleCommentSubmit}>                     
                        Submit a comment:  
                       
                    </form>
                
                    <form>                     
                        <label>number of images:  
                           
                        </label> 
                    </form> 
                    
                     <h2>Images </h2>
                     <div className="images">
                     
                        {this.state.images.map(img=><img src={img} key={img} /> )} 
                       
                    </div>
                    
                </div>
            </>;
    } 
} 
export default Details; 