import React from 'react';

import { Container, Buttons } from './styles';

function Header(){
    return (
    <Container>
        <Buttons href='#Home'>Home</Buttons>
        <Buttons href='#Repos'>Repositórios</Buttons>
    </Container>

    );
}

export default Header;