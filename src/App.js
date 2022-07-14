
import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      showMovies: false

    }
  }

  componentDidMount() {
    fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman'

    ).then(response => response.json())
      .then((apiMovies) =>
        this.setState(() => {
          return { movies: apiMovies['Search'] }
        }
        ))
  }
  render() {
    let { showMovies } = this.state;
    let renderMovies = null;

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
        <button onClick={() => {
          this.setState({ showMovies: !showMovies })
        }}>Show Movies</button>
         {renderMovies}
      </div>
    )
  }
}

export default App;
