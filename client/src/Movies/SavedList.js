import React from 'react';
import {Link}from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* add functionality to home button to go back to Home */}
    <div className="home-button">   
      <Link to = "/" >Home</Link>
    </div>
    {/* <div className="home-button">Home</div> */}
  </div>
);

export default SavedList;
