import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router'
import Routes from '../config/routes'

class Root extends Component {
  render() {
    return (
        <Router history={ hashHistory }>{Routes}</Router>
    );
  }
}

export default Root;
