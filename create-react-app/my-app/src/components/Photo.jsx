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

export default Photo
