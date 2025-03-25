import React, { useState } from 'react';
import './SignUp.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import doneIllustration from '../../assets/img/done.jpg';
import { useNavigate } from 'react-router-dom';
import { signUp  } from '../../api/requests';


const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
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
      const data = await signUp(formData);
      navigate('/');
	
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div className="signup-page">
      <div className='signup-page__form'>
        <h1>Регистрация</h1>
        <Input placeholder={'Введите email'} label={'Email'} type={'text'} value={formData.email} onChange={handleChange} name={"email"}/>
        <Input placeholder={'Введите имя'} label={'Имя'} type={'text'} value={formData.username} onChange={handleChange} name={"username"}/>
        <Input placeholder={'Введите пароль'} label={'Пароль'} type={'password'} value={formData.password} onChange={handleChange} name={"password"}/>
        <Button text={'Зарегистрироваться'} mode={'primary'} onClick={handleSubmit}/>
        <Link text={'Уже есть аккаунт? Войти!'} onClick={()=>navigate('/login')}/>
      </div>
      <div className='signup-page__right'>
        <img src={doneIllustration} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
