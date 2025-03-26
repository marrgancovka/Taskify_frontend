import React from 'react';
import './Input.css';

const Input = ({ label, placeholder, type, mode, value, onChange, area, select, options, weight, name, radio, id, onInput, ref, label_weight, selected }) => {
  
  return (
    <div className="my-input">
      {label && <label className={`my-input__label my-input__label__${label_weight}`}>{label}</label>}
      {area && (
        <textarea name={name} onChange={onChange} className={`my-input__field my-input__${mode} my-input__${weight}`} placeholder={placeholder} value={value} onInput={onInput} ref={ref}/>
      )}
      {select && (
        <select name={name} value={value} className={`my-input__field my-input__${weight}`}>
          {options.map((option) => (
            <option value={option.name} >{option.title}</option>
          ))}
        </select>
      )}
      {radio && (
        <div> 
          <input type="radio" name={name} value={value} id={id} />
          <label for={id}>{value}</label>
        </div> 
      )}
      {/* Поле для даты с кастомным плейсхолдером */}
      {type === 'date' && (
        <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
          {!value && (
            <span 
              className={`custom-placeholder custom-placeholder-${weight}`}
            >
              {placeholder}
            </span>
          )}
          <input 
            name={name}
            onChange={onChange}
            className={`my-input__field my-input__${mode} my-input__${weight}`}
            type={type}
            value={value}
            style={{ color: value ? '#000' : 'transparent' }} // Скрытие текста, если пусто
          />
        </div>
      )}
      {!area && !select && !radio && type !== 'date' && (
        <input name={name} onChange={onChange} className={`my-input__field my-input__${mode} my-input__${weight}`} placeholder={placeholder} type={type} value={value}/>
      )}
    </div>
  );
};

export default Input;
