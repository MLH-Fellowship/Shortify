import React, { useState } from 'react';
import backend from '../api/backend';
import '../styles/summarize.css';

const Summarize = () => {
    const ratioOptions = [0.1, 0.2, 0.3, 0.4, 0.5];
    const [text, setText] = useState('');
    const [ratioSelected, setRatioSelected] = useState(ratioOptions[0]);
    const [textSummarized, setTextSummarized] = useState('');
    const [articleURL, setArticleURL] = useState('');

    /**
     *
     * uses ML model to summarize content
     */
    const getSummarizeContent = async () => {
        const payLoad = {
            content: text,
            ratio: ratioSelected,
            url: articleURL,
        };
        try {
            setTextSummarized('Loading...');
            const response = await backend.post(`/`, payLoad);
            const { data } = response;
            setTextSummarized(data);
        } catch (error) {
            setTextSummarized("Coudn't Summarize Text");
            console.log(error);
        }
    };

    /**
     *
     * rendering dropdown options on the screen
     */
    const ratioOptionsRendered = ratioOptions.map(option => {
        return (
            <option key={option} value={option}>
                {option}
            </option>
        );
    });

    return (
        <div className='container-smrz' id='summarize-area'>
            <div className='sub-container-smrz'>
                <div className='main-content-smrz'>
                    <h1>Article Link</h1>
                    <input
                        className='website-url-smrz'
                        placeholder='Paste Your Website URL...'
                        onChange={e => setArticleURL(e.target.value)}
                    />
                    <h3>OR</h3>
                    <h1>Your Content</h1>
                    <textarea
                        placeholder='Write your text here...'
                        className='user-content-smrz'
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div className='btn-smrz'>
                    <div className='dropdown-smrz'>
                        <p>
                            % of text
                            <select onChange={e => setRatioSelected(e.target.value)}>
                                {ratioOptionsRendered}
                            </select>
                        </p>
                    </div>
                    <button onClick={getSummarizeContent}>Generate text</button>
                </div>
                <div className='summarize-content-smrz'>
                    <h1>Summarized Text</h1>
                    <textarea value={textSummarized} placeholder='Summarized Text' />
                </div>
            </div>
        </div>
    );
};

export default Summarize;
