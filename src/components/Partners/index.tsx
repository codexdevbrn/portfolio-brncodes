import { PartnersProps } from "../../utils/partners";
import { Container, ListContainer, Images} from './styles';

function Partners(){
    return (<Container>
       {PartnersProps.map((partners) => {
                return (
                <ul key={partners.id}>
                   <ListContainer>
                    <Images src={partners.image}/>
                    <p>{partners.name}</p>
                    </ListContainer>
                </ul>
            )})}
    </Container>
    );
}

export default Partners;