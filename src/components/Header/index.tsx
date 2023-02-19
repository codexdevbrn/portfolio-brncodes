import { Container, Buttons, Navbar } from './styles';

function Header(){
    return (
    <Container>
        <Navbar>
            <Buttons href='#Home'>Home</Buttons>
            <Buttons href='#About'>Sobre</Buttons>
            <Buttons href='#Techs'>Tecnologias</Buttons>
        </Navbar>
    </Container>
    );
}

export default Header;