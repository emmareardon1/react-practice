import React from 'react'
import { Route } from 'react-router'
import App from '../components/App'
import PhotosContainer from '../containers/PhotosContainer'

const Routes = (
  <Route>
    <Route path="/" component={App} >
      <Route path="/photos" component={PhotosContainer} />
    </Route>
  </Route>
)

export default Routes