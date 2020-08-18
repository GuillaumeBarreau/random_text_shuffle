import React from 'react';
import './Button.css';

type Props = {
    children?: React.ReactNode,
    eventOnclick: (event: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = (props) => {

    return (
        <div
            id="containerButton"
            className="containerButton"
        >
            <button
                className="containerButton_button"
                onClick={props.eventOnclick}
            >
                {props.children}
            </button>
        </div>
    );
};

Button.defaultProps = {
    eventOnclick: () => { },
    children: 'click'
}
