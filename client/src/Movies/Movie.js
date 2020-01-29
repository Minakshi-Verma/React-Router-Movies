import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; //import useParams
import axios from 'axios';




const Movie = (props) => {
console.log("I am the props from movie", props)
 const [movie, setMovie] = useState();
  let { id } = useParams()   //useParams
  // let {movieID} = useParams() 
  //OR let movieID = useParams()


  //  const [movie, setMovie] = useState(null);
  //  props.movie.find(movie => movieID ===`${movie.id}` //didn't work
  // );
  // const {url} = useRouteMatch() 
  
  useEffect(() => {
   
    // const id = {movieID};//
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        // .get(`http://localhost:5000/api/movies/${movieID}`)
        // .get(`http://localhost:5000/api/movies/${movieID.movieID}`) //if you use line 13
        .then(response => {
          setMovie(response.data);
          console.log("I am the axios call from movie", response.data ) //
         
                  
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);   //code works without dependency array!
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
