import React from 'react';
import './Star.css';

const Star = ({selected, onClick}) =>
    <div className={selected ? "star selected" : 'star'} onClick={onClick}>
        <h1>*</h1>
    </div>;

export default Star
