import React from 'react';
import '../../styles/card.css';

// images
import github from '../../images/github_logo_white.png';
import linkedin from '../../images/linkedin_logo_white.png';

const Card = ({ img, name, githubLink, linkedinLink }) => {
    return (
        <div className='card-team'>
            <img src={img} alt='saad' />
            <h2>{name}</h2>
            <p className='icon-card'>
                <a href={githubLink}>
                    <img src={github} alt='github' />
                </a>
                <a href={linkedinLink}>
                    <img src={linkedin} alt='linkedin' />
                </a>
            </p>
        </div>
    );
};

export default Card;
