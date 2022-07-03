import React, { useEffect, useState } from 'react';
import { saveInStorage } from '../helpers/saveInStorage';

export const Add = () => {

    // Hook state to the input to search
    const [search, setSearch] = useState("");
    // Hook state when the API return something
    const [movies, setMovies] = useState([]);

    // Hook useEffect when the search value changes
    useEffect(() => {
        // Async function with the fetch to the API to get the movies
        const getMoviesFromAPI = async (movieTitle = "") => {
            // Build the url with the api key and the title wanted
            const url = `http://www.omdbapi.com/?apikey=fc59da33&s=${movieTitle}`;
            const response = fetch(url);
            // Wait for the response
            const responseJson = await (await response).json();
            // Validate if the response was successfull
            if (responseJson.Response == 'True') {
                // Get the movies of the response and pass it to the movies state
                const responseArray = Object.values(responseJson.Search);
                setMovies(responseArray);
            } else {
                // Set the movies state with the error of the response
                setMovies(["Error", responseJson.Error]);
            }
        };
        // Do the fetch only when the user type something
        if (search != "") {
            getMoviesFromAPI(search);
        }
    }, [search]);

    // Function to add a movie in the localStorage
    const addMovie = (movieId, movieTitle, movieYear, moviePoster) => {
        const movie = {
            id: movieId,
            title : movieTitle,
            year : movieYear,
            poster : moviePoster
        }
        saveInStorage("movies", movie);
    }

  return (
    <>
        <section id="content" className="content-movies">
            { /* Validate if the state of the search is different to the null string */
            search != "" ?
                /* Validate if the movies array are more than 0 */
                movies.length > 0 &&
                    /* Validate if the fetch was successfull */
                    movies[0] != "Error" ? 
                        /* Iterate over the movies array and render each one */
                        movies.map(movie => {
                            return (
                                <article key={movie.imdbID} className='movie-item'>
                                    <img className="poster" src={movie.Poster}></img>
                                    <h3 className="title">{movie.Title}</h3>
                                    <p className="description">{movie.Year}</p>
                                    <button className="add-button" 
                                    onClick={(event) => addMovie(movie.imdbID, movie.Title, movie.Year, movie.Poster)}>
                                        Add
                                    </button>
                                </article>
                            )
                        })
                    /* Render a warning if the fetch wasn't successfull with the error */
                    : <div className='card-warning'>{movies[1]}</div>
            /* Render a warning if the user doesn't type anything */
            : <div className='card-warning'>
                If you want to add a movie, write the title of the movie wanted and click
                the button to search
                </div>
        }
        </section>
        <aside className="lat">
            <div className="search">
            <h3 className="title">Browser:</h3>
            <form onSubmit={(event) => {
                        event.preventDefault();
                        setSearch(event.target.search.value);
                    }}>
                <input id='searchAPI' name='search' type='text'></input>
                <input type='submit' value='Search'/>
            </form>
            </div>
        </aside>
    </>
  )
}
