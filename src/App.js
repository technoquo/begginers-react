import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movieName: 'Indiana Jones',

    }
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome te Lareveller</h1>
        <p>My favorite movie is {this.state.movieName}.</p>
        <button onClick={() =>{
          this.setState({movieName: "Indiana Jones 2"})
        }}
        >
         Cambiar el titulo 
        </button>
        <button onClick={() =>{
          this.setState({movieName: "Indiana Jones 3"})
        }}
        >
         Cambiar el titulo 
        </button>
      </div>
    )
  } 
}

export default App;
