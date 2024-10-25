import React, { useState } from 'react';
import { LinkGenerationView } from './link-generation-page.view';

export const LinkGenerationPage: React.FC = () => {
  const [link, setLink] = useState('');
  const [newLink, setNewLink] = useState('');

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
