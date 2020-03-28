import React from 'react'; 
import Details from './Details.js';
import App from './App.js';
import dog from './App.js';

class DetailForms extends React.Component { 
    constructor(props) {       
        super(props);              
        
    }
    
    render() {
      
        return <>
                    <form onSubmit={this.props.handleCommentSubmit}>                     
                        Submit a comment:  
                       <textarea onChange={this.props.handleCommentChange} 
                       value={this.props.newComment}></textarea> 
                         <input type='submit' value='Submit comment' /> 
                    </form>
                
                    <form>                     
                        <label>number of images: 
                         <input type='number' min='0' max={ this.props.images.length} value={this.props.number} onChange={this.props.handleNumberChange}/> 
                           
                        </label> 
                    </form> 
        
                </>
        
        
    } 
} 
export default DetailForms; 