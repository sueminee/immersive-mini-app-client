import React from 'react';
import PhotoEntry from './PhotoEntry'
const PhotoList = (props) => {
  return (
    <div className='container'>
      {props.data.map(photo => <PhotoEntry photo={photo}/>)}
    </div>
  );
};

export default PhotoList;