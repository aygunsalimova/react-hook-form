import React from 'react';
import './App.css'

export default function Input({id, label, placeholder, type, name, register, errorMessage}) {
    return (
        <div className='input-group'>
            <label htmlFor={id}>{label}<span>*</span> </label>
            <input type={type} name={name} id={id} placeholder={placeholder} {...register} />
            <span className='error-message'>{errorMessage}</span>
        </div>
    );
}

