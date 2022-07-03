import React from 'react'

export default function Edit({movie, getMovies, setEdit, setListState}) {
    const componentTitle = "Edit Movie";

    const saveEdit = (event, id) => {
        event.preventDefault();
        // Get movies stored in local Storage
        const moviesStored = getMovies();
        // Get the movie to update
        const index = moviesStored.findIndex(movie => movie.id === id);
        // Create object with the index
        let movieUpdated = {
            id,
            title: event.target.title.value,
            year: event.target.year.value,
            poster: URL.createObjectURL(event.target.poster.files[0])
        }
        // Update the movie with the index
        moviesStored[index] = movieUpdated;
        // Save the new object in local Storage
        localStorage.setItem("movies", JSON.stringify(moviesStored));
        // Update the states
        setListState(moviesStored);
        setEdit(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={event => saveEdit(event, movie.id)}>
            <input type='text' name='title' className='editedTitle' defaultValue={movie.title}/>
            <input type='text' name='year' className='editedyear' defaultValue={movie.year}/>
            <input id="poster" type="file" name="poster"/>
            <input type='submit' className='edit' value='Update'></input>
        </form>
    </div>
  )
}
