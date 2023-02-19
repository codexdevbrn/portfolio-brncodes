import { Container } from "./styles";
import Caroseul from "../../components/Carousel";
import Titles from "../../components/Titles";

function Tecnologies() {
 const title = 'Tecnologias';
    
 return(
        <Container id="Techs">
            <Titles item={title}/>
            <Caroseul />
        </Container>
    );
}
export default Tecnologies;