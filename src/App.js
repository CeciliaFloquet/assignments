import React from 'react'; 
import axios from 'axios';
import Chooser from './Chooser.js';
import Details from './Details.js';

class App extends React.Component { 
    constructor(props){
        super(props)
        
        this.state={           
            dogs:[],
            current:undefined
        };
        this.chooseDog = this.chooseDog.bind(this);
    }
    
    componentDidMount() {      
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(results=>{
            this.setState({           
                dogs: Object.keys(results.data.message),  
                current: Object.keys(results.data.message)[0]
               
            });
        
        })
        .catch(error=>{console.log(error)});
    } 
    
    chooseDog(dog) {
        this.setState({  
            current:dog
        });     
        
    }
   
    render() {     
        return  <>
                <div className="app">
                    <h1>Assignment 8: Advanced Dog App</h1>
                    <Chooser dogs={this.state.dogs} chooseDog={this.chooseDog} />
                    <Details current={this.state.current} chooseDog={this.chooseDog} />
                    
                    
                </div>
                </>;
    } 
} 
 
export default App;