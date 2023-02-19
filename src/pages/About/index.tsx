import { Container } from "./styles";
import Titles from "../../components/Titles";
function About() {
    const title = 'Sobre';
    return(
        <Container id="About">
            <Titles item={title}/>
        </Container>
    );

}

export default About;