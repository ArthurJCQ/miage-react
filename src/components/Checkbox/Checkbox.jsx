import React from 'react';

const Checkbox = ({ label, checkChange }) => {

    return (
        <>
            <input
            id="checkbox"
            type="checkbox"
            onChange={(event) => checkChange(event)}
            />
            <label htmlFor="checkbox">{label}</label>
        </>
    )
}

export default Checkbox;
