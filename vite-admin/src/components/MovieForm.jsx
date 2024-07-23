// import React, { useState } from 'react';
// import { db } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';

// const MovieForm = () => {
//   const [name, setName] = useState('');
//   const [director, setDirector] = useState('');
//   const [genre, setGenre] = useState('');
//   const [releaseDate, setReleaseDate] = useState('');
//   const [language, setLanguage] = useState('');
//   const [imdbRating, setImdbRating] = useState('');
//   const [showtime, setShowtime] = useState('');
//   const [description, setDescription] = useState('');
//   const [trailerLink, setTrailerLink] = useState('');
//   const [images, setImages] = useState(['']);

//   const handleAddImage = () => {
//     setImages([...images, '']);
//   };

//   const handleRemoveImage = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     setImages(newImages);
//   };

//   const handleImageChange = (index, value) => {
//     const newImages = images.map((img, i) => (i === index ? value : img));
//     setImages(newImages);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, 'movies'), {
//         name,
//         director,
//         genre,
//         releaseDate,
//         language,
//         imdbRating,
//         showtime,
//         description,
//         trailerLink,
//         images,
//       });
//       alert('Movie added successfully!');
//     } catch (error) {
//       console.error('Error adding movie:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
//       <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} placeholder="Director" required />
//       <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
//       <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} placeholder="Release Date" required />
//       <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Language" required />
//       <input type="number" value={imdbRating} onChange={(e) => setImdbRating(e.target.value)} placeholder="IMDB Rating" required />
//       <input type="text" value={showtime} onChange={(e) => setShowtime(e.target.value)} placeholder="Showtime" required />
//       <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
//       <input type="url" value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} placeholder="Trailer Link" required />
//       <div>
//         <h3>Images</h3>
//         {images.map((image, index) => (
//           <div key={index}>
//             <input
//               type="url"
//               value={image}
//               onChange={(e) => handleImageChange(index, e.target.value)}
//               placeholder={`Image URL ${index + 1}`}
//               required
//             />
//             {images.length > 1 && (
//               <button type="button" onClick={() => handleRemoveImage(index)}>
//                 Remove
//               </button>
//             )}
//           </div>
//         ))}
//         <button type="button" onClick={handleAddImage}>
//           Add Another Image
//         </button>
//       </div>
//       <button type="submit">Add Movie</button>
//     </form>
//   );
// };

// export default MovieForm;
