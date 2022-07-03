import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export const Create = ({setListState}) => {
    const componentTitle = "Create Movie";
    const [movieState, setMovieState] = useState({
        title: '',
        year : ''
    })
    const {title, year} = movieState;
    const getDataToCreate = event => {
        event.preventDefault();

        // Get data of the form
        const title  = event.target.title.value;
        const year   = event.target.year.value;
        const poster = URL.createObjectURL(event.target.poster.files[0]);        
        
        // Create an object with the movie to save
        const movie = {
            id: new Date().getTime(),
            title,
            year,
            poster
        };
        // Save state
        setMovieState(movie);
        // Update the state of the list
        setListState(elements => {
            return [...elements, movie];
        });
        // Save in localStorage
        saveInStorage("movies", movie);
    }

  return (
    <div className="add">
        <h3 className="title">{componentTitle}</h3>
        <strong>
            {(title && year) && "You have created the movie: " + title}
        </strong>
        <form onSubmit={getDataToCreate}>
            <input id="title" type="text" name="title" placeholder="Title"/>
            <input id="year" type="text" name="year" placeholder="Year"/>
            <input id="poster" type="file" name="poster"/>
            <input id="save" type="submit" value="Save"/>
        </form>
    </div>
  )
}
