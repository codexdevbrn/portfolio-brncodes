import {useEffect, useRef} from 'react';
import { Container, Buttons, Navbar, ButtonResp } from './styles';
import { TiThMenu, TiArrowMinimise } from 'react-icons/ti';
import { THEME } from '../../theme';

function Header(){
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
          if (navRef.current) {
            if (window.innerWidth > 1024) {
              navRef.current.classList.remove('responsive');
            } 
          }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const showNavbar = () => {
        if (navRef.current && window.innerWidth < 1024) {
          return navRef.current.classList.toggle('responsive');
        }
    }

    return (
        <>
    <Container>
        <Navbar ref={navRef}>
            <Buttons to="/" onClick={showNavbar}>Início</Buttons>
            <Buttons to="techs" onClick={showNavbar}>Tecnologias</Buttons>
            <Buttons to="about" onClick={showNavbar}>Sobre</Buttons>
        <ButtonResp className='close-btn' onClick={showNavbar}>
            <TiArrowMinimise 
            color={THEME.COLORS.SUCCESS}
            size={30}
            />
        </ButtonResp>
        </Navbar>
        <ButtonResp id='open' className='open-btn' onClick={showNavbar}>
            <TiThMenu color={THEME.COLORS.SUCCESS} size={30}/>
        </ButtonResp>
    </Container>
    </>
    );
    
}

export default Header;