import React, { useEffect, useState } from 'react'
import Edit from './Edit';

export const List = ({listState, setListState}) => {

  const [edit, setEdit] = useState(0);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    if (localStorage.getItem("movies")) {
      let movies = JSON.parse(localStorage.getItem("movies"));
      setListState(movies);
      return movies;
    } else {
      setListState(null);
      return [];
    }
  }

  const deleteMovie = (id) => {
    // Get movies stored
    let moviesStored = getMovies();
    // Delete the movie selected
    let newMoviesStored = moviesStored.filter(movie => movie.id != id);
    // Update the list state
    setListState(moviesStored);
    // Update the data in local storage
    localStorage.setItem("movies", JSON.stringify(newMoviesStored));
    getMovies();
  }

  return (
    <>
    {(listState != null && listState.length > 0) ?
      listState.map(movie => {
        return (
          <article key={movie.id} className="movie-item">
            <img className="poster" src={movie.poster}></img>
            <h3 className="title">{movie.title}</h3>
            <p className="year">{movie.year}</p>
            <button className="edit" onClick={() => setEdit(movie.id)}>Edit</button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
            {/* Form to edit */
            edit === movie.id && (
              <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState}/>
            )}
          </article>
        )
      })
      : <div className='card-warning'>There are not movies to show</div>
    }        
    </>
  )
}
