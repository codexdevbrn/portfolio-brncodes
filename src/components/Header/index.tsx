import React from 'react';

import { Container, Buttons } from './styles';

function Header(){
    return (
    <Container>
        <Buttons href='#Home'>Home</Buttons>
        <Buttons href='#Techs'>Tecnologias</Buttons>
    </Container>

    );
}

export default Header;