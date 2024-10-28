import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkGenerationView from './link-generation-page.view';

export const LinkGenerationPage: React.FC = () => {
  const [link, setLink] = useState('');
  const [newLink, setNewLink] = useState('');
  const navigate = useNavigate();

  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleGenerate = () => {
    const sanitizedLink = link.endsWith('/') ? link.slice(0, -1) : link;
    console.log('Sanitized link:', sanitizedLink);

    const linkId = sanitizedLink.split('/').pop();
    console.log('Extracted Link ID:', linkId);

    if (!linkId) {
      console.error('Link ID is empty or invalid');
      return;
    }

    const encodedId = btoa(linkId);
    const generatedLink = `https://pay.missis-laser.ru/${encodedId}`;
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
