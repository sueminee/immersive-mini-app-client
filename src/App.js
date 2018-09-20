import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Photo from './routes/Photo';
import Author from './routes/AuthorPhoto';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/photo' component={Photo}/>
          <Route path='/AuthorPhoto' component={Author}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
