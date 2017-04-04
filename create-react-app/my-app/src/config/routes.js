import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import PhotosContainer from '../containers/PhotosContainer'
import PhotoContainer from '../containers/PhotoContainer'

const Routes = (
  <Route>
    <Route path="/" component={App} >
      <Route path="/photos" component={PhotosContainer} />
      <Route path="/photos/:id" component={PhotoContainer} />
    </Route>
  </Route>
)

export default Routes
