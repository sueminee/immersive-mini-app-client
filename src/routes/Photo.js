import React from 'react';
import {Link} from 'react-router-dom';

const Photo = (props) => {
  console.log('photo의 props#####################', props)
  var width = window.innerWidth*0.9;
  var height = window.innerHeight*0.9;
  var {id, author, authorPhoto} = props.location.state;
  console.log('main에서 사진 누르면 photo 컴포넌트로 라우팅 됨 그럼 props.location.state.author는', author);
  return (
    <div>
      <div className='App-header'>
        <h3 className="App-title"> Photographed by 
        <Link to={{
          pathname : `/AuthorPhoto/${author}`,
          state : {
            id : props.location.state.id,
            author : props.location.state.author,
            authorPhoto : props.location.state.author_url,
          }
          }}>{author}</Link></h3>
           {/* <a href={`${authorPhoto}`}>{author}</a></h3> */}
      </div>
      <div className='imgDiv'>
        <img src={`https://picsum.photos/${width}/${height}?image=${id}`} alt='' />
      </div>
    </div>
  );
};

export default Photo;