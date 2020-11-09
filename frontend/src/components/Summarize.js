import React, { useState } from 'react';
import '../styles/summarize.css';
import backend from '../api/backend';

const Summarize = () => {

    const [text, setText] = useState('');
    //const sentenceOptions = [3,4,5,6];
    const ratioOptions = [.1, .2, .3, .4, .5];
    const [ratioSelected, setRatioSelected] = useState(ratioOptions[0]);
    const [textSummarized, setTextSummarized] = useState('');
    
    /**
     *
     * uses ML model to summarize content
     */


    const getSummarizeContent = async () => {
        const response = await backend.post(`/${text}/${ratioSelected}`);
        const { data } = response;
        setTextSummarized(data);
    };

    const ratioOptionsRendered = ratioOptions.map(option => {
        return (
            <option value={option}>{option}</option>
        );
    });


    return (
        <div className='container-smrz' id='summarize-area'>
            <div className='sub-container-smrz'>
                <div className='main-content-smrz'>
                    <h1>Your Content</h1>
                    <textarea 
                        placeholder='Write your text here...'
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='btn-smrz'>
                    <button onClick={getSummarizeContent}>Generate text</button>
                    <div className="dropdown-smrz">
                        <p>
                            Ratio
                            <select onChange={(e) => setRatioSelected(e.target.value)}>
                                {ratioOptionsRendered}
                            </select>
                        </p>
                    </div>
                </div>
                <div className='summarize-content-smrz'>
                    <h1>Summarized Text</h1>
                    <textarea 
                        value={textSummarized} 
                        placeholder='Summarized Text' 
                    />
                </div>
            </div>
        </div>
    );
};

export default Summarize;
