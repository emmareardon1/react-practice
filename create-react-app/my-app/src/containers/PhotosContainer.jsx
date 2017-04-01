import React from 'react'
import Photos from '../components/Photos'

class PhotosContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      photos: []
    }

    this.showPhoto = this.showPhoto.bind(this)
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/photos?_limit=30', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ photos: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  showPhoto(photo) {
    this.context.router.push(`/photos/${photo.id}`)
  }

  render(){
    return (
      <Photos
        photos={this.state.photos}
        showPhoto={this.showPhoto}
      />
    )

  }

}

// YOU NEED TO GET THE ROUTER FROM THE CONTEXT SO YOU NEED TO ADD THIS.
// BUT THIS WAY IS NOT THE RECOMMENDED ONE, WE'LL SEE THE RECOMMENDED WAY
// IN THE ADVANCED COURSE SINCE WE NEED TO EXPLAIN A PATTERN
PhotosContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default PhotosContainer
