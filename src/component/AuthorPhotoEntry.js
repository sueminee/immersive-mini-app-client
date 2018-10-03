import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AuthorPhotoEntry extends Component {

  render() {

    console.log('PhotoEntry에서 props.photo를 찍어보고 있습니다.', this.props.photo)
    var width = this.props.photo.width / 10;
    var height = this.props.photo.height /10;

    return (
      <div>
        <div className='imgDiv'>
          <Link to={{
            pathname : `/Photo/${this.props.photo.id}`,
            state : {
              id : this.props.photo.id,
              author : this.props.photo.author,
              authorPhoto : this.props.photo.author_url,
            }
          }}>
          
            <img src={`https://picsum.photos/${width}/${height}?image=${this.props.photo.id}`} alt=''/>
          </Link>
        </div>
      </div>
    );
  }
}

export default AuthorPhotoEntry;