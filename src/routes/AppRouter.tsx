import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { ErrorPage } from '../pages/error-page/error-page.container';
import AuthPage from '../pages/auth/auth-page.container';
import { LinkGenerationPage } from '../pages/link-generation/link-generation-page.container';
import { ConfirmPage } from '../pages/confirm/confirm-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ConfirmPage />} />
      <Route path="/default-link" element={<ConfirmPage />} />
      <Route path="/admin" element={<AuthPage />} />
      <Route path="/link-generation" element={<LinkGenerationPage />} />
      <Route path="/start" element={<WelcomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
