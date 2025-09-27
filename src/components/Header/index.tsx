import { useEffect, useRef } from 'react';
import { Container, Buttons, Navbar, ButtonResp } from './styles';
import { TiThMenu, TiArrowMinimise } from 'react-icons/ti';
import { useTheme } from '../../theme';
import { ThemeToggle } from '../ThemeButton';
function Header(){
     const navRef = useRef<HTMLDivElement>(null);
     const { theme } = useTheme();

     useEffect(() => {
// sourcery skip: avoid-function-declarations-in-blocks
         function handleResize() {
// sourcery skip: merge-nested-ifs
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
          navRef.current.classList.toggle('responsive');
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
            <TiArrowMinimise color={theme.COLORS.SUCCESS} size={30} />
        </ButtonResp>
         </Navbar>
         {/* theme toggle placed next to menu button */}
         <ThemeToggle />
         <ButtonResp id='open' className='open-btn' onClick={showNavbar}>
            <TiThMenu color={theme.COLORS.SUCCESS} size={30} />
         </ButtonResp>
     </Container>
     </>
     );
     
 }
 
 export default Header;