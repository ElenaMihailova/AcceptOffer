import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkGenerationView } from './link-generation-page.view';

export const LinkGenerationPage: React.FC = () => {
  const [link, setLink] = useState('');
  const [newLink, setNewLink] = useState('');
  const navigate = useNavigate();

  //todo проверка авторизации
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleGenerate = () => {
    const generatedLink = `https://example.com/new-link?ref=${Math.random().toString(36).substr(2, 9)}`;
    setNewLink(generatedLink);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(newLink);
  };

  return (
    <LinkGenerationView
      link={link}
      newLink={newLink}
      setLink={setLink}
      handleGenerate={handleGenerate}
      handleCopy={handleCopy}
    />
  );
};
