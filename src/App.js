import { useState, useEffect } from 'react';
import MovieList from './Components/movie-list/movie-list';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';

const App = () => {

const [movies, setMovies] = useState([]);
const [showMovies, setShowMovies] = useState(false);
const [searchInput, setSearchInput] = useState('');

useEffect(() =>{
       fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
          .then(response => response.json())
          .then((apiMovies) => {
            setMovies(apiMovies['Search'])
            setShowMovies(true)          
          })
    }, [])
           
     const searchMovieHandler = (event)=> {
        const search = event.target.value.toLocaleLowerCase()
        setSearchInput(search)    
      }
      
       
          const filterMovies  = movies.filter((movie)=>{
             return movie.Title.toLocaleLowerCase().includes(searchInput)
          })
      
          let renderMovies = 'Loading Movies...';
      
          if (showMovies) {
            renderMovies =  <MovieList movies={filterMovies} />
          }
          return (
            <div className="max-w-6xl mx-auto bg-gray-400">
              <h1 className="flex justify-center text-2xl font-semibold">Welcome te Lareveller</h1>
              <div className="flex justify-center">
              <input 
                     className=" m-2 p-2 text-gray-400 rounded-md"
                     type='search' 
                     placeholder="search movies" 
                     onChange={searchMovieHandler} />       
              </div>
              <Routes>
                <Route path="/" element={renderMovies} />
                <Route path="about" element={<About />} />
              </Routes>             
            </div>
          )
        }





export default App;
// import { Component } from 'react';
// import MovieList from './Components/movie-list/movie-list';

// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       movies: [],
//       showMovies: false,
//       searchInput: ''

//     }
//   }

//   componentDidMount() {
//     fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman'

//     ).then(response => response.json())
//       .then((apiMovies) =>
//         this.setState(() => {
//           return { movies: apiMovies['Search'],showMovies: true }
//         }
//         ))
//   }

//   searchMovieHandler = (event)=> {
//     const search = event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//         return{ searchInput: search}
//     })
  
//   }

  

//   render() {
//     let { showMovies, searchInput, movies } = this.state;
    
//     const filterMovies  = movies.filter((movie)=>{
//        return movie.Title.toLocaleLowerCase().includes(searchInput)
//     })

//     let renderMovies = 'Loading Movies...';

//     if (showMovies) {
//       renderMovies =  <MovieList movies={filterMovies} />
//     }
//     return (
//       <div className="max-w-6xl mx-auto bg-gray-400">
//         <h1 className="flex justify-center text-2xl font-semibold">Welcome te Lareveller</h1>
//         <div className="flex justify-center">
//         <input 
//                className=" m-2 p-2 text-gray-400 rounded-md"
//                type='search' 
//                placeholder="search movies" 
//                onChange={this.searchMovieHandler} />       
//         </div>
//          {renderMovies}
//       </div>
//     )
//   }
// }

// export default App;
