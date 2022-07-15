
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

  searchMovieHandler = (event)=> {
    const search = event.target.value.toLocaleLowerCase()
    this.setState(()=>{
        return{ searchInput: search}
    })
  
  }

  

  render() {
    let { showMovies, searchInput, movies } = this.state;
    
    const filterMovies  = movies.filter((movie)=>{
       return movie.Title.toLocaleLowerCase().includes(searchInput)
    })

    let renderMovies = 'Loading Movies...';

    if (showMovies) {
      renderMovies = (
        <div>
          {
            filterMovies.map((movie) => {
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
               onChange={this.searchMovieHandler} />
         {renderMovies}
      </div>
    )
  }
}

export default App;
