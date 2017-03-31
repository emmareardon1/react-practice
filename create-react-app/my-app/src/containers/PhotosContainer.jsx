import React from 'react'
import Photos from '../components/Photos'


class PhotoContainer extends React.Component {
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
    this.context.router.push(`/photos/${photo.url}`)
  }

  render(){
    return (
      <Photos 
        photos={this.state.photos}
        showPhoto={this.showPhoto}
      / >
    )

  }
    
}

export default PhotoContainer