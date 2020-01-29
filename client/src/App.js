import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    
  };
 

  return (
    <div>
    
      <SavedList list={savedList} />
{/* 
      <Route exact path="/" component={MovieList}/> */}
      <Route exact path = "/">
        <MovieList />
      </Route>

      {/* <Route path="/MovieList/id"  component={Movie}/> */}
      {/* <Movie add = {addToSavedList}/> */}
      {/* <Route path = "/movie/:movieID"> */}
      
       <Route path = "/movie/:id">

      
        <Movie />
      </Route>
        
      
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
