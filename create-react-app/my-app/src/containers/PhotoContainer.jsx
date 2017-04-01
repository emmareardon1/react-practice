import React from 'react'
import Photos from '../components/Photos'
import PhotoPage from '../components/PhotoPage'

class PhotoContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      photo: []
    }
  }

  componentDidMount() {
    // FETCH A SINGLE PHOTO FROM THE API USING
    // `http://jsonplaceholder.typicode.com/photos/${this.props.params.id}``
  }

  render(){
    return (
      <PhotoPage
        photo={this.state.photo}
      />
    )
  }
}

export default PhotoContainer
