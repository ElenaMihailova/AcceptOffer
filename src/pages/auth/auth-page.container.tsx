import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthPageView from './auth-page.view';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAuthSubmit = (login: string, password: string) => {
    console.log('Логин:', login);
    console.log('Пароль:', password);

    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate('/link-generation');
    }
  };

  return <AuthPageView handleSubmit={handleAuthSubmit} />;
};

export default AuthPage;
