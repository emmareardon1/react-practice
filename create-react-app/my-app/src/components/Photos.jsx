import React from 'react'
import Photo from '../components/Photo'

const Photos = (props) => {
	let getPhotos = props.photos.map(photo => (
	  <Photo
	  	key={photo.id}
	  	src={photo.thumbnailUrl}
	  	alt={photo.title}
	  	showPhoto={props.showPhoto.bind(null, photo)}
	  />
	  )
	);

    return (
      <div>
        <h1>My photos</h1>
        <ul>
       	  {getPhotos}
        </ul>
      </div>
    )

}

export default Photos
