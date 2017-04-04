import React from 'react'

const PhotoPage = (props) => (
  <div>
	<h1>Selected photo id={props.id}</h1>
	<img className="photo-large"
	  src={props.src} 
	  alt={props.alt}
	/>
  </div>
)

export default PhotoPage
