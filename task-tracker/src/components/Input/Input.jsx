import React from 'react';
import './Input.css';

const Input = ({ label, placeholder, type, mode, value, onChange, area, select, options, weight, name }) => {
  return (
    <div className="my-input">
      {label && <label className="my-input__label">{label}</label>}
      {area && (
        <textarea name={name} onChange={onChange} className={`my-input__field my-input__${mode} my-input__${weight}`} placeholder={placeholder} value={value}/>
      )}
      {select && (
        <select name={name} value={value} className='my-input__field'>
          {options.map((option) => (
            <option value={option.name}>{option.title}</option>
          ))}
        </select>
      )}
      {!area && !select &&(
        <input name={name} onChange={onChange} className={`my-input__field my-input__${mode} my-input__${weight}`} placeholder={placeholder} type={type} value={value}/>
      )}
    </div>
  );
};

export default Input;
