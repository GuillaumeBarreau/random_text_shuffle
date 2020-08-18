import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './RandomTextShuffle.css';
import { chars, colorsBasic } from '../../logic/RandomTextShuffle.logic';

export const RandomTextShuffle = ({ children}) => {

    const [randomText, setRandomText] = useState(children);
    const [finalText, setFinalText] = useState([]);
    const [colors] = useState(colorsBasic);
    
    useEffect(() => {
        // On récupére le nombre total de caractére dans la props ${Children}.
        const countTotalChars = children.length;

        let storeText = children;

        // On stoke dans le state setRandomText() un caractére aléatoire pour chaque chaine de caractère de la variable ${text}.
        // Si le caractére est un espace on retourne celui-ci sans le modifier.
        const setIntervalRandomText = setInterval(() => {
            setRandomText([...storeText].map(c => {
                const randomTextComponent = (c === ' ')
                    ? c
                    : chars[Math.floor(Math.random() * chars.length)]

                return randomTextComponent
            }));

        }, 75);

        // On init storeFinalText afin de lui assigner une nouvelles valeurs à chaque Interval 
        let storeFinalText = '';

        const setIntervalFinalText = setInterval(() => {
            // On récupére la premiére lettre de la chaine de caractére de notre ${storeText}.
            const getFirstLetterToText = storeText.slice(0, 1);
            
            // On assigne la valeur ${storeText} à ${storeText} en retirant la premiére lettre de la chaine de caractére.
            storeText = storeText.slice(1);
            
            // On accumule les ${getFirstLetterToText} à chaque interval pour récupérer le texte final.
            storeFinalText = storeFinalText + getFirstLetterToText

            setRandomText(storeText);
            setFinalText(storeFinalText);

        }, (6000 / countTotalChars));

        return () => {
            return [clearInterval(setIntervalRandomText), clearInterval(setIntervalFinalText)];
        };
        
    }, [children]);

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