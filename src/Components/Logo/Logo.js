import React from 'react';
import revolver from './revolver.png';
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <img alt='logo' style={{paddingTop: '15px'}} src={revolver}/>
        </div>
    );
}

export default Logo;