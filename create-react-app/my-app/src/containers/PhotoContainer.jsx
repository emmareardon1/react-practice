import React from 'react'
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
    fetch(`http://jsonplaceholder.typicode.com/photos/${this.props.params.id}`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ photo: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render(){
    return (
      <PhotoPage
        photo={this.state.photo}
        id={this.state.photo.id}
        src={this.state.photo.url}
        alt={this.state.photo.title}
      />
    )
  }
}

export default PhotoContainer
