import React from 'react';
import styles from './About.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';

function About() {
    return (
        <div className={ styles.About }>
            <div className={ styles.Intro }>
                <div>This site is managed and operated by myself since 2019.</div>
                <div>It has a responsive mobile version. Try it on your smart phone.</div>
                <div>There are multiple UI and function changes since the site was been published.</div>
                <div>So don't surpise about the changes every time you vist tjxia.xyz.</div>
            </div>

            <div className={ styles.Contract }>
                <div><a href="https://www.linkedin.com/in/tianjianxia/" target="_blank" rel="noopener noreferrer">Connect me on Linkedin. <FontAwesomeIcon icon={ faLinkedin }/></a></div>
                <div><a href="https://github.com/tianjianxia" target="_blank" rel="noopener noreferrer">Follow my Github. <FontAwesomeIcon icon={ faGithub }/></a></div>
                <div><a href="mailto:tjxia@engineer.com" target="_blank" rel="noopener noreferrer">Message me via email. <FontAwesomeIcon icon={ faEnvelope }/></a></div>
            </div>
        </div>
    );
}

export default About;