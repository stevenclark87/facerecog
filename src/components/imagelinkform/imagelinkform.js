import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3 white'>{'This Magic Brain will detect faces in your pictures'}</p>
            <div className='center'>
            <div className='pa4 br3 center'>
            <input className="f4 pa2 w-70 center" type="text" />
            <button className='w-30 grow f4 link ph3'>Detect</button>
            </div>
        </div>
        </div>
    )
}

export default ImageLinkForm;