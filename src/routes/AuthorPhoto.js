import React, { Component } from 'react';
import PhotoList1 from '../component/PhotoList1'

class AuthorPhoto extends Component {
  state = {
    data : []

  }

  componentDidMount(){
    var authorName = this.props.location.state.author
    console.log('얍얍', authorName);
    fetch(`http://localhost:3000/author/${authorName}`)
    .then(res => res.json())
    .then(data => {
      console.log('authorName으로 fetch해서 받아오는 data입니다.', data)
      this.setState({data:data})
      console.log('authorName으로 fetch해서 data 받아와서 setState 한 후 this.state입니다.', this.state.data[0])
    })
  }

  render() {
    console.log('어떠뽀토에서 프뢉스 찍는중', this.props)
    return (
      <div>
        <div className='App-header'>
        <h3 className="App-title">{this.props.location.state.author}</h3>
        </div>
        {this.state.data.length === 0 ?
          <div className='App-title'>LOADING...</div> :
          // <div>hi</div>
          <PhotoList1 data={this.state.data} />
        }
      </div>
    );
  }
}

export default AuthorPhoto;
