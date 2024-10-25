import React from 'react';
import { Container, useTheme } from '@mui/material';
import { AuthForm } from '../../components/auth-form';
import { PageWrapper } from '../../components/page-wrapper';

interface AuthPageProps {
  handleSubmit: (login: string, password: string) => void;
  errorMessage: string;
}

const AuthPageView: React.FC<AuthPageProps> = ({ handleSubmit, errorMessage }) => {
  const theme = useTheme();

  return (
    <PageWrapper>
      <Container
        sx={{
          height: '',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: {
            xs: theme.spacing(2),
          },
          paddingX: '0',
          paddingY: theme.spacing(2),
          maxWidth: theme.breakpoints.values.md,
        }}
      >
        <AuthForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
      </Container>
    </PageWrapper>
  );
};

export default AuthPageView;
