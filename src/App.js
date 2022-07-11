
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {id:1,name: 'Indiana Jones 1', year: 1981},
        {id:2,name: 'Indiana Jones 2', year: 1984},
        {id:3,name: 'Indiana Jones 3', year: 1989},
        {id:4,name: 'Indiana Jones 4', year: 2008},
        {id:5,name: 'Indiana Jones 5', year: 2023},
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
        {this.state.movies.map((movie)=>{
              return <h2 key={movie.id}>My favorite movie is {movie.name}{" "}{movie.year}</h2>
        })}
     
        <input type="text" onChange={this.changeName} value={this.state.movies[0].name}/>
       
      </div>
    )
  } 
}

export default App;
