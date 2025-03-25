import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import doneIllustration from '../../assets/img/done.jpg';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/requests';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const data = await login(formData);
        navigate('/');
    
      } catch (error) {
        console.log(error)
      }
    };
  

  return (
    <div className="signup-page">
      <div className='signup-page__form'>
        <h1>Авторизация</h1>
        <Input placeholder={'Введите email'} label={'Email'} type={'text'} onChange={handleChange} name={'email'} value={formData.email}/>
        <Input placeholder={'Введите пароль'} label={'Пароль'} type={'password'} name={'password'} value={formData.password} onChange={handleChange}/>
        <Button text={'Войти'} mode={'primary'} onClick={handleSubmit}/>
        <Link text={'Еще нет аккаунта? Зарегистрироваться!'} onClick={()=>navigate('/signup')}/>
      </div>
      <div className='signup-page__right'>
        <img src={doneIllustration} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
