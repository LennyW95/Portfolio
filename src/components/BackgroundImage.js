import React from 'react';

export const BackgroundImage = (props) => (
    <div className='BackgroundImage' style={{ backgroundImage: `url("${props.imageUrl}")` }}>
        <h1 className="backgroundImage__header">{props.header}</h1>
    </div>
);
