import React from 'react';
import {Link} from 'react-router-dom';

const PhotoEntry = (props) => {
  console.log('PhotoEntry에서 props.photo를 찍어보고 있습니다.', props.photo)
  var width = props.photo.width / 10;
  var height = props.photo.height /10;
  return (
    <span>
      <Link to={{
        pathname : `/Photo/${props.photo.id}`,
        state : {
          id : props.photo.id,
          author : props.photo.author,
          authorPhoto : props.photo.author_url,
        }
      }}>
        <img src={`https://picsum.photos/${width}/${height}?image=${props.photo.id}`} alt=''/>
      </Link>
    </span>
  );
};

export default PhotoEntry;