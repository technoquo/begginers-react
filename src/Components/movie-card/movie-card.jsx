import { Component } from "react";

class MovieCard extends Component {
    render() {

        const { Poster, Title, Year } = this.props.movie
        return <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={Poster} alt={Title} width="182" height="268"></img>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {Title}</h5>
                </a>
                <span className="mr-4">{Year}</span>
            </div>
        </div>
    }


}

export default MovieCard