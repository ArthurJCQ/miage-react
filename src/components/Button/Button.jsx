import React from 'react';
import './style.css'

const Button = ({ 
    text = 'Button', 
    loading = false, 
    disabled = false,
    onCLick,
    type,
}) => {

    return (
            <button 
            onClick={() => onCLick()}
            className={!disabled ? 'btn' : 'btn btn--disabled'} 
            disabled={loading || disabled}
            type={type}
            >
                { !loading ? text : 'loading...'}
            </button>
    )
}

export default Button;
