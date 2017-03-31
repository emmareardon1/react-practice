import React from 'react'
import Photo from '../components/Photo'

const Photos = (props) => {
	let getPhotos = props.photos.map(photo => (
	  <Photo 
	  	key={photo.id} 
	  	src={photo.thumbnailUrl} 
	  	alt={photo.title}
	  	onClick={props.showPhoto.bind(null, photo)}
	  />
	  )
	);

    return (
      <ul>
       	{getPhotos}
      </ul>
    )

}

export default Photos