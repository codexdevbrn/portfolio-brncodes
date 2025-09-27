import { FC } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from './routes/scrollTop';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './theme';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const ThemedApp: FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}

export default App;