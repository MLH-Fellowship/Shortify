import React from 'react';
import '../styles/summarize.css';

const Summarize = () => {
    return (
        <div className='container-smrz' id='summarize-area'>
            <div className='sub-container-smrz'>
                <div className='main-content-smrz'>
                    <h1>Your Content</h1>
                    <textarea placeholder='Write your text here...' />
                </div>
                <div className='btn-smrz'>
                    <button>Generate text</button>
                </div>
                <div className='summarize-content-smrz'>
                    <h1>Summarized Text</h1>
                    <textarea value='' placeholder='Summarized Text' />
                </div>
            </div>
        </div>
    );
};

export default Summarize;
