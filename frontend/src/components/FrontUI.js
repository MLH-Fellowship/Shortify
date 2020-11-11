import React from 'react';

// stylesheets
import '../styles/frontui.css';

// images
import landingImg from '../images/landing-page-img.png';

const FrontUI = ({ scrollToSummarize }) => {
    return (
        <div className='info-container-frtui'>
            <div className='sub-container-frtui'>
                <div className='content-frtui'>
                    <div className='heading-frtui'>
                        <h1>Shortify</h1>
                    </div>
                    <div className='tagline-frtui'>
                        <p className='tagline-head-frtui'>Get an article gist under 1 minute</p>
                        <p className='tagline-text-frtui'>
                            Paste an article or provide its URL, you can get it's short summary just
                            under a minute.
                        </p>
                    </div>
                    <div className='button-frtui'>
                        <button
                            onClick={() =>
                                scrollToSummarize(document.getElementById('summarize-area'))
                            }
                        >
                            Summarize
                        </button>
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
