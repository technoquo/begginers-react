import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {name: 'Indiana Jones 1', year: 1981},
        {name: 'Indiana Jones 2', year: 1984},
        {name: 'Indiana Jones 3', year: 1989},
        {name: 'Indiana Jones 4', year: 2008},
        {name: 'Indiana Jones 5', year: 2023},
      ]

    }
  }
  changeName =(event) => {
    this.setState({
      movies: [
        {name: event.target.value, year: 1981},
        {name: 'Batman 2', year: 1984},
        {name: 'Batman 3', year: 1989},
        {name: 'Batman 4', year: 2008},
        {name: 'Batman 5', year: 2023},
      ]
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome te Lareveller</h1>
        <p>My favorite movie is {this.state.movies[0].name}. {this.state.movies[0].year}</p>
        <p>My favorite movie is {this.state.movies[1].name}. {this.state.movies[1].year}</p>
        <p>My favorite movie is {this.state.movies[2].name}. {this.state.movies[2].year}</p>
        <p>My favorite movie is {this.state.movies[3].name}. {this.state.movies[3].year}</p>
        <p>My favorite movie is {this.state.movies[4].name}. {this.state.movies[4].year}</p>
        <input type="text" onChange={this.changeName} value={this.state.movies[0].name}/>
       
      </div>
    )
  } 
}

export default App;
