import React from 'react';

import './Container.css';

type Props = {
    children: React.ReactNode,
    component: string,
    variant: string,
}

export const Container: React.FC<Props> = ({
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

