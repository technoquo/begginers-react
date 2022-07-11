
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []

    }
  }

   componentDidMount(){
      fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman'
      
      ).then(response => response.json())
        .then((apiMovies) => 
           this.setState(() => {
             return { movies: apiMovies['Search'] }
           }
       ))
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome te Lareveller</h1>
        {this.state.movies.map((movie)=>{
              return <h2 key={movie.imdbID}>My favorite movie is {movie.Title}{" "}{movie.Year}</h2>
        })}
     
       
       
      </div>
    )
  } 
}

export default App;
