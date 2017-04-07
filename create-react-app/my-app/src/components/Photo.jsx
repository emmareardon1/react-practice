import React from 'react'

const Photo = (props) => {
    return (
      <li onClick={props.showPhoto}>
        <img
        	src={props.src}
        	alt={props.alt}
        />
      </li>
    )
}

Photo.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
}

export default Photo
