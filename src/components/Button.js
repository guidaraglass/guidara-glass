import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className="btn" type="button">
            {text}
        </button>
    );
};

export default Button;