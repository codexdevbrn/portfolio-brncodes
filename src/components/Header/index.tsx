import { Container, Buttons, Navbar } from './styles';

function Header(){
    return (
    <Container>
        <Navbar>
            <Buttons to="/">Home</Buttons>
            <Buttons to="techs">Tecnologias</Buttons>
            <Buttons to="about">Sobre</Buttons>
        </Navbar>
    </Container>
    );
}

export default Header;