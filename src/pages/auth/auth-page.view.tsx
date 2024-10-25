import internal from 'stream';
import { AuthForm } from '../../components/auth-form';
import { PageWrapper } from '../../components/page-wrapper';
import { Container, useTheme } from '@mui/material';

interface AuthPageProps {
  handleSubmit: (login: string, password: string) => void;
}

const AuthPageView: React.FC<AuthPageProps> = ({ handleSubmit }) => {
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
        <AuthForm handleSubmit={handleSubmit} />

      </Container>
    </PageWrapper>
  );
};

export default AuthPageView;
