import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return(
        <div className='center'>
        <img src={imageURL} alt='stuff' />
        </div>
    )
}

export default FaceRecognition;