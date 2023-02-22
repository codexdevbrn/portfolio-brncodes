import { Container, ListContainer } from './styles';
import { Techs, Images } from '../../utils/tecnologias';

function Caroseul() {
    return (
        <>
        <Container>
            {Techs.map((techs, idx) => {
                const Icons = Images[idx];
                return (
                <ul key={idx}>
                   <ListContainer>
                    <Icons style={{color: techs.color}} />
                    <p>{techs.name}</p>
                    </ListContainer>
                </ul>
            )})}
        </Container>
        </>
    );
}

export default Caroseul;