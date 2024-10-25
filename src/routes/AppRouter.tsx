import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/welcome-page/welcome-page.container';
import { ErrorPage } from '../pages/error-page/error-page.container';
import AuthPage from '../pages/auth/auth-page.container';
import { LinkGenarationPage } from '../pages/link-generation/link-generation-page.container';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/link-generation" element={<LinkGenarationPage />} />
      <Route path="/start" element={<WelcomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
