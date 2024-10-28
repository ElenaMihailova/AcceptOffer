import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ConfirmPageView } from './confirm-page.view';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { RootState } from '../../state/store';
import { setLink } from '../../state/link-slice';

export const ConfirmPage: React.FC = () => {
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const link = useSelector((state: RootState) => state.link.link);

  useEffect(() => {
    console.log('Location search:', location.search);
    const searchParams = new URLSearchParams(location.search);
    const initialLink = searchParams.get('initialLink');
    console.log('Extracted initialLink:', initialLink);
  
    if (initialLink) {
      dispatch(setLink(initialLink));
    } else {
      console.error('initialLink отсутствует в URL');
    }
  }, [location.search, dispatch]);  
  

  const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreementChecked(event.target.checked);
  };

  const handleContinue = () => {
    if (link) {
      console.log('Пользователь продолжил с подтвержденным договором');
      window.location.href = link;
    } else {
      console.error('Ссылка не установлена');
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
