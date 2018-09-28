import React, { Component } from 'react';
import AuthorPhotoEntry from './AuthorPhotoEntry';

class AuthorPhotoList extends Component {
  render() {
    return (
      <div div className='container'>
        {this.props.data.map(photo => <AuthorPhotoEntry photo={photo}/>)}
      </div>
    );
  }
}

export default AuthorPhotoList;