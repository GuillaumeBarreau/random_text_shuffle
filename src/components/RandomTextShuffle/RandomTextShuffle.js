import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RandomTextShuffle.css';
import { colors , chars } from '../../logic/RandomTextShuffle.logic';

export const RandomTextShuffle = ({children, type}) => {

    let text = children;
    let lasText = '';

    const [randomText, setRandomText] = useState(text);
    const [finalText, setFinalText] = useState(lasText);

    useEffect(() => {

        const setIntervalRandomText = setInterval(() => {
            setRandomText([...text].map(c => {
                const randomTextComponent = (c === ' ')
                    ? c
                    : chars[Math.floor(Math.random() * chars.length)]

                return randomTextComponent
            }));

            if (text.length === 0) {
                clearInterval(setIntervalRandomText);
            }
        }, 50);

        const setIntervalFinalText = setInterval(() => {
            let textSlice = text.slice(0, 1);
            text = text.slice(1);

            lasText = lasText + textSlice

            setRandomText(text);
            setFinalText(lasText);
            
            if (text.length === 0) {
                clearInterval(setIntervalFinalText);
            }
        }, 75);
        
    }, []);

    return (
        <>
            {
                [...finalText].map((c,i) => (<span key={i}>{c}</span>))
            
            }
            {
                [...randomText].map((c,i) => {
                    const randomTextInnerHtml = (c === ' ')
                        ? (
                            <span key={i} >{c}</span>
                        )
                        : (
                            <span key={i} style={{ color: colors[Math.floor(Math.random() * colors.length)] }}>
                                {
                                    chars[Math.floor(Math.random() * chars.length)]
                                }
                            </span>
                        )

                    return randomTextInnerHtml
                })
            }
        </>
    );
};

RandomTextShuffle.defaultProps = {
    children: 'text not found',
    type: null,
}

RandomTextShuffle.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
}