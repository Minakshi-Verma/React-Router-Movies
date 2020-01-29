import React from 'react';
// import {Link}from 'react-router-dom'; //import Link or navLink hook if want to use Link
import {useHistory} from 'react-router-dom'; //useHistory can do the same thing that link does

const SavedList = props => {
  let history = useHistory();  //better and effective way than using simple Links
  console.log(history);


return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* add functionality to home button to go back to Home */}

    <div onClick = {history.goBack} className="home-button">Home</div> 

    {/* <div onClick = {() => history.push("/")} className="home-button">Home</div>  */}
     {/* the above line makes use of .push to add the functionality but will prevent it to go to infinite loop) */}

      {/* <Link to = "/" >Home</Link> */}     */}
      {/* <Link to = "/" ><div className="home-button">Home</div></Link> */}
  </div>
 );
};
export default SavedList;
