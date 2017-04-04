import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router'
import Routes from '../config/routes'
import configureStore from '../configureStore'
import { Provider } from 'redux'

const store = configureStore()

class Root extends Component {
  render() {
    return (
      <Provider store={store}> 
        <Router history={ hashHistory }>{Routes}</Router>
      </Provider>
    );
  }
}

export default Root;
