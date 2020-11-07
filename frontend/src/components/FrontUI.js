import React from 'react';

// stylesheets
import '../styles/frontui.css';

// images
import landingImg from '../images/landing-page-img.png';

const FrontUI = () => {
    return (
        <div className='info-container-frtui'>
            <div className='sub-container-frtui'>
                <div className='content-frtui'>
                    <div className='heading-frtui'>
                        <h1>Summarizer</h1>
                    </div>
                    <div className='tagline-frtui'>
                        <p className='tagline-head-frtui'>Spend 2 mins instead of 10 mins</p>
                        <p className='tagline-text-frtui'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed
                            aliquam erat. Aliquam et lorem et lacus facilisis
                        </p>
                    </div>
                    <div className='button-frtui'>
                        <button>Summarize</button>
                    </div>
                </div>
                <div className='img-frtui'>
                    <img src={landingImg} alt='landing-img' />
                </div>
            </div>
        </div>
    );
};

export default FrontUI;
