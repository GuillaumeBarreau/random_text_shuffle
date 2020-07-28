import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RandomTextShuffle.css';
import { colors , chars } from '../../logic/RandomTextShuffle.logic';

export const RandomTextShuffle = ({children}) => {

    const [randomText, setRandomText] = useState(children);
    const [finalText, setFinalText] = useState('');

    const countTotalChars = children.length;
    
    useEffect(() => {
        let lastText = finalText;
        let text = randomText;
    
        // On stoke dans le state setRandomText() un caractére aléatoire pour chaque chaine de caractère de la variable ${text}.
        // Si le caractére est un espace on retourne celui-ci sans le modifier.

        const setIntervalRandomText = setInterval(() => {
            setRandomText([...text].map(c => {
                const randomTextComponent = (c === ' ')
                    ? c
                    : chars[Math.floor(Math.random() * chars.length)]

                return randomTextComponent
            }));

            // lorsque le nombre chaine de caratére arrive à Zero on stop la fonction Interval

            if (text.length === 0) {
                clearInterval(setIntervalRandomText);
            }
        }, 50);

        // On retire le premier caractére de la chaine de caractère de ${text}

        const setIntervalFinalText = setInterval(() => {
            let textSlice = text.slice(0, 1);
            text = text.slice(1);

            lastText = lastText + textSlice

            setRandomText(text);
            setFinalText(lastText);
            
            // lorsque le nombre chaine de caratére arrive à Zero on stop la fonction Interval

            if (text.length === 0) {
                clearInterval(setIntervalFinalText);
            }
        }, (6000 / countTotalChars));
        
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
}

RandomTextShuffle.propTypes = {
    children: PropTypes.string,
}