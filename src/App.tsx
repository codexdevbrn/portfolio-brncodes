import React from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Header from './components/Header'
import Tecnologies from './pages/Tecnologies';


function App() {
  return (
    <>
    <Header/>
    <Home />
    <Tecnologies />
    <GlobalStyle />
    </>
  );
}

export default App;
