import React from 'react';
import PropTypes from 'prop-types';

import './Container.css';

export const Container = ({
    children,
    component,
    variant,
    ...props
}) => React.createElement(
    component,
    {
        className: variant ? `containerElement_${variant}` : `containerElement`,
        ...props
    },
    children,
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

   