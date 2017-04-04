import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import PhotosContainer from '../containers/PhotosContainer'
import PhotoContainer from '../containers/PhotoContainer'

const Routes = (
  <Route>
    <Route component={App} >
      <Route path="/" component={Home} />
      <Route path="/photos" component={PhotosContainer} />
      <Route path="/photos/:id" component={PhotoContainer} />
    </Route>
  </Route>
)

export default Routes
