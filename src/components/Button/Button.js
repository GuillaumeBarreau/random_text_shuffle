import React from 'react';

import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ eventOnclick, children }) => {

    return (
        <div 
            id="containerButton" 
            className="containerButton" 
        >
            <button 
                className="containerButton_button" 
                onClick={eventOnclick}
            >
                {children}
            </button>
        </div>
    );
};

Button.defaultProps = {
    eventOnclick: () => {},
    children: 'click'
}

Button.propTypes = {
    children: PropTypes.string,
    eventOnclick: PropTypes.func,
}