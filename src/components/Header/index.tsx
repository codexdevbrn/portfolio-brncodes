import {useRef} from 'react';
import { Container, Buttons, Navbar, ButtonResp} from './styles';
import {TiThMenu, TiArrowMinimise} from 'react-icons/ti';
import { THEME } from '../../theme';
function Header(){
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        return navRef.current?.classList.toggle('responsive');
   }
    return (
        <>
    <Container>
        <Navbar ref={navRef}>
            <Buttons to="/">Home</Buttons>
            <Buttons to="techs">Tecnologias</Buttons>
            <Buttons to="about">Sobre</Buttons>
        <ButtonResp className='close-btn' onClick={showNavbar}>
            <TiArrowMinimise color={THEME.COLORS.PRIMARY} size={30}/>
        </ButtonResp>
        </Navbar>
        <ButtonResp className='open-btn' onClick={showNavbar}>
            <TiThMenu color={THEME.COLORS.PRIMARY} size={30}/>
        </ButtonResp>
    </Container>
    </>
    );
}

export default Header;