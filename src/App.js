import React from 'react'; 
import Header from './Header.js';
import DogList from './DogList.js';
import DogBreed from './DogBreed.js';
import RandomDog from './RandomDog.js';

class App extends React.Component { 
 
    render() {     
        return  <>
                    <Header/>
                    <RandomDog/>
                    <DogList/>
                    
                </>;
                                            
    } 
    
} 
 
export default App; 