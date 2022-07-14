
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      showMovies: false,
      searchInput: ''

    }
  }

  componentDidMount() {
    fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman'

    ).then(response => response.json())
      .then((apiMovies) =>
        this.setState(() => {
          return { movies: apiMovies['Search'],showMovies: true }
        }
        ))
  }
  render() {
    let { showMovies } = this.state;
    let renderMovies = 'Loading Movies...';

    if (showMovies) {
      renderMovies = (
        <div>
          {
            this.state.movies.map((movie) => {
              return <h2 key={movie.imdbID}>My favorite movie is {movie.Title}{" "}{movie.Year}</h2>
            })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Welcome te Lareveller</h1>
        <input type='search' 
               placeholder="search movies" 
               onChange={(event)=> {
                const search = event.target.value;
                this.setState(()=>{
                    return{ searchInput: search}
                })
              
              }} />
         {renderMovies}
      </div>
    )
  }
}

export default App;
