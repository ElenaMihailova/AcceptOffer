import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPageView from './auth-page.view';

// Тест
const testUsers = [
  { login: 'user1', password: '123' },
  { login: 'user2', password: '456' },
];

const AuthPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleAuthSubmit = (login: string, password: string) => {
    console.log('Логин:', login);
    console.log('Пароль:', password);

    const isAuthenticated = testUsers.some(
      (user) => user.login === login && user.password === password
    );

    if (isAuthenticated) {
      setErrorMessage('');
      navigate('/link-generation');
    } else {
      setErrorMessage('Неправильный логин или пароль');
    }
  };

  return <AuthPageView handleSubmit={handleAuthSubmit} errorMessage={errorMessage} />;
};

export default AuthPage;
