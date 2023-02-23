import GlobalStyle from './src/styles/global';
import Header from './src/components/Header'
import Footer from './src/components/Footer';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './src/routes';
import ScrollToTop from './src/routes/scrollTop';

function App() {
  return (
    <>
    <GlobalStyle/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ScrollToTop/>
            <Header/>
            <AppRoutes/>
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
