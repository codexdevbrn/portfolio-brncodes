import GlobalStyle from './styles/global';
import Header from './components/Header'
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from './routes/scrollTop';

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
