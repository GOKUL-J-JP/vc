// import React from 'react';

// eslint-disable-next-line react/prop-types
export const Objarr = ({ name, size }) => {
    return (
        <li> {size == 5 ? <h1> The Animal name is {name} </h1> : "Nothing"}</li>
    );
};
