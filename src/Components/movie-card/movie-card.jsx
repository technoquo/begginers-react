import { Component } from "react";

class MovieCard extends Component {
    render() {

        const {Poster, Title, Year} = this.props.movie
        return <div>
               <img src={Poster} alt={Title}></img>
               <h2>{Title}</h2>
               <span>{Year}</span>             
               </div>
    }


}

export default MovieCard