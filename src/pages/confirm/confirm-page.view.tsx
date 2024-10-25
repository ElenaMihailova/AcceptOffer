import React from 'react';
import { Box, Checkbox, Button, Typography, FormControlLabel, Link } from '@mui/material';
import { PageWrapper } from '../../components/page-wrapper';

interface ConfirmPageViewProps {
  isAgreementChecked: boolean;
  onAgreementChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContinue: () => void;
}

export const ConfirmPageView: React.FC<ConfirmPageViewProps> = ({ isAgreementChecked, onAgreementChange, onContinue }) => {
  return (
    <PageWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 400, margin: '0 auto', padding: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', textAlign: 'center' }}>
          Пожалуйста, ознакомьтесь с договором
        </Typography>

        <FormControlLabel
          control={<Checkbox checked={isAgreementChecked} onChange={onAgreementChange} />}
          label={
            <Typography sx={{ color: 'primary.main' }}>
              С <Link href="/agreement.pdf" target="_blank" rel="noopener" underline="hover" sx={{ color: 'primary.main' }}>
                договором ознакомлен
              </Link>
            </Typography>
          }
        />

        <Button
          variant="contained"
          color="primary"
          onClick={onContinue}
          disabled={!isAgreementChecked}
        >
          Продолжить
        </Button>
      </Box>
    </PageWrapper>
  );
};
