import { PageWrapper } from '../../components/page-wrapper';
import { Container, useTheme } from '@mui/material';



const WelcomePageView: React.FC = () => {
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

      </Container>
    </PageWrapper>
  );
};

export default WelcomePageView;
