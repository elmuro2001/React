import React, { useState } from 'react';

function Input({ value, onChange }) {
    return (
        <div className='bg-light border-dark borderWidth: 3 rounded-pill p-3'>
            <input 
                type="number" 
                value={value} 
                onChange={onChange} 
                className='form-control border-dark borderWidth: 3 rounded-pill'
            />
        </div>
    );
}

export default Input;