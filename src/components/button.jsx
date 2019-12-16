import React from 'react';
import './button.css';

export default Props =>
    <button className={`
        button
        ${Props.operation ? 'operation' : ''}
        ${Props.double ? 'double' : ''}
        ${Props.triple ? 'triple' : ''}
    `}
    onClick={e => Props.click(Props.label)}
    >
        {Props.label}
    </button>