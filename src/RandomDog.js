import React from 'react'; 
import axios from 'axios';
 
class RandomDog extends React.Component { 
     constructor(props) {       
        super(props);              
        this.state={           
            dogImg:""      
        };
        
    }
    componentDidMount() {      
        
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(results=>{
        
            this.setState({           
                    dogImg: results.data.message
                });
        })
        .catch(error=>{console.log(error)});
    } 
    
    render() {     
        return <>
                <img src={this.state.dogImg} alt="Logo"/>
                </>;
    } 
} 
export default RandomDog; 