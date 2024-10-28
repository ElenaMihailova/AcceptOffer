import React, { useState, useEffect } from 'react';
import { ConfirmPageView } from './confirm-page.view';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

export const ConfirmPage: React.FC = () => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [originalLink, setOriginalLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // const urlParams = new URLSearchParams(location.search);
    const urlParams = new URLSearchParams('?ref=OVVGSk8=');
    const encodedRef = urlParams.get('ref');

    if (encodedRef) {
      try {
        const decodedLinkId = atob(encodedRef);
        const fullLink = `https://yclients.com/pay/${decodedLinkId}`;
        setOriginalLink(fullLink);
        console.log('Decoded Full Link:', fullLink);
      } catch (error) {
        console.error('Error decoding link ID:', error);
      }
    }
  }, [location]);

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreementChecked(event.target.checked);
  };

  const handleContinue = () => {
    if (originalLink) {
      console.log('Redirecting to:', originalLink);
      window.location.href = originalLink;
    }
  };

  const handleAdminNavigate = () => {
    navigate('/admin');
  };

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleAdminNavigate}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        Временный переход на админскую страницу
      </Button>
      <ConfirmPageView
        isAgreementChecked={isAgreementChecked}
        onAgreementChange={handleAgreementChange}
        onContinue={handleContinue}
      />
    </>
  );
};
