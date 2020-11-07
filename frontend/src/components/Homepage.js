import React from 'react';

// stylesheets
import '../styles/homepage.css';

// images
import landingImg from '../images/landing-page-img.png';

const Homepage = () => {
    return (
        <div className='container-hmpg'>
            <div className='sub-container-hmpg'>
                <div className='content-hmpg'>
                    <div className='heading-hmpg'>
                        <h1>Summarizer</h1>
                    </div>
                    <div className='tagline-hmpg'>
                        <p className='tagline-head-hmpg'>Spend 2 mins instead of 10 mins</p>
                        <p className='tagline-text-hmpg'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
                            aliquam erat. Aliquam et lorem et lacus facilisis
                        </p>
                    </div>
                    <div className='button-hmpg'>
                        <button>Summarize</button>
                    </div>
                </div>
                <div className='img-hmpg'>
                    <img src={landingImg} alt='landing-img' />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
