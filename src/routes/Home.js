import React, { Component } from 'react';
import Header from '../component/Header';
import PhotoList from '../component/PhotoList';

class Home extends Component {

  state = {
    data : [],
  }


  getData = () => {
    console.log('hi');
    fetch('https://picsum.photos/list')
    .then(res => res.json())
    .then(data => {
      console.log('getData함수에서 fetch해서 받아오는 data입니다.', data)
      this.setState({data:data})
      console.log('getData함수에서 fetch해서 date 받아와서 setState 한 후 this.state입니다.', this.state.data[0])
    })
  };

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.data.length === 0 ?
          <div className='App-title'>LOADING...</div> :
          // <div>hi</div>
          <PhotoList data={this.state.data} />
        }
      </div>
    );
  }
}

export default Home;