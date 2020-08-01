import React from 'react';
import PropTypes from 'prop-types';

import './Container.css';

export const Container = ({
    children,
    component,
    variant,
}) => React.createElement(
    component,
    {
        className: variant ? `containerElement_${variant}` : `containerElement`
    },
    children
);

Container.defaultProps = {
    children: '',
    component: 'p',
    variant: ''
};

Container.propTypes = {
    children: PropTypes.node,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    variant: PropTypes.string
};


const WelcomeTitle = ({primary, user}) => {

    const message = (user) ? `Welcome${user}` : 'Welcome!';

    const element = (primary) ? <h1>{message}</h1> : <h2>{message}</h2>;

    return element
}

   