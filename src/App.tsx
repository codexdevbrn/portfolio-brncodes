import React from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Header from './components/Header'
import Tecnologies from './pages/Tecnologies';
import Footer from './components/Footer';
import About from './pages/About';


function App() {
  return (
    <>
    <Header/>
    <Home />
    <About />
    <Tecnologies />
    <Footer/>
    <GlobalStyle />
    </>
  );
}

export default App;
