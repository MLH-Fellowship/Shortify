import React from 'react';

// components
import Card from './common/Card';

// stylesheets
import '../styles/team.css';

//images
import saad from '../images/saad.jpg';
import aneesh from '../images/Aneesh_Kodali.jpeg';
import ania from '../images/ania.jpg';

const Team = () => {
    return (
        <div className='container-team'>
            <div className='sub-container-team'>
                <div className='head-team'>
                    <h1>Developers Behind Summarizer</h1>
                </div>
                <div className='wrapper-cards'>
                    <Card
                        img={saad}
                        name='Saad Irfan'
                        githubLink='https://github.com/msaaddev'
                        linkedinLink='https://linkedin.com/in/msaaddev'
                    />
                    <Card
                        img={ania}
                        name='Anna Tselikova'
                        githubLink='https://github.com/aniats'
                        linkedinLink='https://linkedin.com/in/anna-tselikova-756496164'
                    />
                    <Card
                        img={aneesh}
                        name='Aneesh Kodali'
                        githubLink='https://github.com/aneeshkodali'
                        linkedinLink='https://linkedin.com/in/aneeshkodali'
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
