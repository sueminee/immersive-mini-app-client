import React from 'react';
// import {Link} from 'react-router-dom';

const Photo = (props) => {
  console.log(props)
  var width = window.innerWidth*0.9;
  var height = window.innerHeight*0.9;
  var {id, author, authorPhoto} = props.location.state;
  return (
    <div>
      <div className='App-header'>
        <h3 className="App-title"> Photographed by 
        {/* <Link to={{
          pathname : `/AuthorPhoto/${author}`,
          state : {
            id : props.photo.id,
            author : props.photo.author,
            authorPhoto : props.photo.author_url,
          }
          }}> */}
           <a href={`${authorPhoto}`}>{author}</a></h3>
        {/* </Link> */}
      </div>
      <div className='imgDiv'>
        <img src={`https://picsum.photos/${width}/${height}?image=${id}`} alt='' />
      </div>
    </div>
  );
};

export default Photo;