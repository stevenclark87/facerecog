import React from 'react';
import Tilt from 'react-tilt'
import thryvLogo from './thryv-main-logo-white.png'
import './logo.css'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br-2 shadow-2" options={{ max : 25 }} style={{ width: 180 }} >
            <div className="Tilt-inner"> <img alt='thryv logo' src={thryvLogo}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;