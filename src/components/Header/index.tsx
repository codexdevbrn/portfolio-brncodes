import {useEffect, useRef} from 'react';
import { Container, Buttons, Navbar, ButtonResp} from './styles';
import {TiThMenu, TiArrowMinimise} from 'react-icons/ti';
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
        if (navRef.current) {
          return navRef.current.classList.toggle('responsive');
        }
    }

    return (
        <>
    <Container>
        <Navbar ref={navRef}>
            <Buttons to="/">Início</Buttons>
            <Buttons to="techs">Tecnologias</Buttons>
            <Buttons to="about">Sobre</Buttons>
        <ButtonResp className='close-btn' onClick={showNavbar}>
            <TiArrowMinimise 
            color={THEME.COLORS.PRIMARY} 
            size={30}
            />
        </ButtonResp>
        </Navbar>
        <ButtonResp id='open' className='open-btn' onClick={showNavbar}>
            <TiThMenu color={THEME.COLORS.PRIMARY} size={30}/>
        </ButtonResp>
    </Container>
    </>
    );
    
}

export default Header;