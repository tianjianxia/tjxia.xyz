import React from 'react';
import styles from './Logo.module.scss';
import image from '../assets/portrait.jpg';

function Logo() {
    return (
        <div className={ styles.Logo }>
            <img alt="" src={ image }/>
        </div>
    );
}

export default Logo;