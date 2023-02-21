import { Container } from "./styles";
import Caroseul from "../../components/Carousel";
import Titles from "../../components/Titles";

function Tecnologies() {
 const title = 'Tecnologias';
    
 return(
    <Container
        key='techs'
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.5} }}>
            <Titles item={title}/>
            <Caroseul />
        </Container>
    );
}
export default Tecnologies;