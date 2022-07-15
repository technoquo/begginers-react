import { Component } from "react";

class MovieList extends Component{

    render(){
         return (
            <div>
            {
              this.props.movies.map((movie) => {
                return <h2 key={movie.imdbID}>My favorite movie is {movie.Title}{" "}{movie.Year}</h2>
              })}
          </div>
         )
    }
}

export default MovieList;