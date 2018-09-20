import React from 'react';
import PhotoEntry1 from './PhotoEntry1'
const PhotoList1 = (props) => {
  return (
    <div className='container'>
      {props.data.map(photo => <PhotoEntry1 photo={photo}/>)}
    </div>
  );
};

export default PhotoList1;