import React from 'react'; 
import axios from 'axios';
import App from './App.js';
import DetailForms from './DetailForms.js';
import DetailViews from  './DetailViews.js';


class Details extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            images:[],
            number:1,
            newComment:"",
            comments:[]             
        }
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {  
        
      if(prevProps.current != this.props.current){

            axios.get(`https://dog.ceo/api/breed/${this.props.current}/images`)
            .then(results=>{
                this.setState({       
                    images:results.data.message
            
                })
            })
            .catch(error=>console.log(error))
            
            
            axios.get(`/comments/${this.props.current}`)
            .then(results=>{
                    var test=results.data.map(obj=>
                    obj.text)  
                
                this.setState({       
                    comments:test
            
                })

            })
            .catch(error=>console.log(error)) 
            
        }
        
    }
    handleNumberChange(event) {  
        
        // TODO update the state to reflect the new number  
        this.setState({       
            number:event.target.value
            
        });
        
    }
     handleCommentChange(event) { 
 
         // Update newComment in state
        this.setState({       
            newComment:event.target.value
        
        })
    }  
    
    handleCommentSubmit(event) { 
        event.preventDefault();
          // Post a new comment to '/comments'
        var obj = {
            breed: this.props.current, 
            text:this.state.newComment
        }
        var tempComments= this.state.comments.slice(0);
        axios.post('/comments', obj)
            .then(results=>{
                tempComments.push(results.data.text)
                
                this.setState({       
                    comments:tempComments,
                    newComment: ""
        
                })

            })
            .catch(error=>console.log(error))
    }
    
    render() {

       let formProps = {                
           handleCommentSubmit:this.handleCommentSubmit,                
           handleCommentChange:this.handleCommentChange,                
           handleNumberChange:this.handleNumberChange,                
           images:this.state.images,                
           number:this.state.number,               
           newComment:this.state.newComment,   
           comments: this.state.comments
           
       };    
  
        return <>
            <div className="details">
                    <h2> Details: {this.props.current}</h2>
                   
                    <DetailForms {...formProps} />
                    <DetailViews {...formProps} />
                    
                </div>
            </>;
    } 
} 
export default Details; 