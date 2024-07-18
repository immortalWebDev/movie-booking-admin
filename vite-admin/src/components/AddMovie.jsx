import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './AddMovie.css'


const AddMovie = () => {
  const [movie, setMovie] = useState({
    name: '',
    description: '',
    director: '',
    genre: '',
    releaseDate: '',
    language: '',
    imdbRating: '',
    showtime: '',
    heroImage: '',
    poster: '',
    posterTwo: '',
    posterThree:'',
    trailerLink: '',
    showas:'',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'movies'), movie);
      alert('Movie added successfully');

      setMovie({
        name: '',
        description: '',
        director: '',
        genre: '',
        releaseDate: '',
        language: '',
        imdbRating: '',
        showtime: '',
        poster: '',
        heroImage: '',
        posterTwo: '',
        posterThree: '',
        trailerLink: '',
        showas:'',
       
      });
    } catch (error) {
      console.error('Error adding movie: ', error);
      alert('Error adding movie');
    }
  };

  return (
    <>
    
    <form className="add-movie-form" onSubmit={handleSubmit}>
    <h2>Add Movie</h2>
      <label>
        Name:
        <input type="text" name="name" value={movie.name} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={movie.description} onChange={handleChange} required></textarea>
      </label>
      <label>
        Director:
        <input type="text" name="director" value={movie.director} onChange={handleChange} required />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={movie.genre} onChange={handleChange} required />
      </label>
      <label>
        Release Date:
        <input type="date" name="releaseDate" value={movie.releaseDate} onChange={handleChange} required />
      </label>
      <label>
        Language:
        <input type="text" name="language" value={movie.language} onChange={handleChange} required />
      </label>
      <label>
        IMDB Rating:
        <input type="number" name="imdbRating" value={movie.imdbRating} onChange={handleChange} required />
      </label>
      <label>
        Showtime:
        <input type="text" name="showtime" value={movie.showtime} onChange={handleChange} required />
      </label>
      <label>
        Poster URL:
        <input type="text" name="poster" value={movie.poster} onChange={handleChange} required />
      </label>
      <label>
        Poster Two URL:
        <input type="text" name="posterTwo" value={movie.posterTwo} onChange={handleChange} required />
      </label>
      <label>
        Poster Three URL:
        <input type="text" name="posterThree" value={movie.posterThree} onChange={handleChange} required />
      </label>
      <label>
        Hero Image URL:
        <input type="text" name="heroImage" value={movie.heroImage} onChange={handleChange} />
      </label>
      <label>
        Trailer Link:
        <input type="text" name="trailerLink" value={movie.trailerLink} onChange={handleChange} />
      </label>
      <label>
        Show as:
        <input type="text" name="showas" value={movie.showas} onChange={handleChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
    </>
  );
};

export default AddMovie;









