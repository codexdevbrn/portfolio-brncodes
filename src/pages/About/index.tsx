import { Container, Text, TitleContainer } from "./styles";
import Titles from "../../components/Titles";

function About() {
    const title = 'Sobre';
    return(
        <>
            <Container
                key='about'
                initial={{width: 0}} 
                animate={{width: "100%"}} 
                exit={{x: window.innerWidth, 
                        transition: {duration: 0.5} }}>
                <Titles item={title}/>
                    <TitleContainer>
                        <Text>
                            Apaixonado por tecnologia e inovações, formado como analista e eterno estudante.<br/>
                            <br/>

                            Minhas habilidades incluem desenvolvimento front-end para web e mobile utilizando tecnologias do ecossistema javascript, 
                            como React e React-Native Framework, TypeScript e outras tecnologias. Domino ferramentas como Figma, Photoshop e Illustrator.<br/> 
                            <br/>
                            Nas horas vagas sou designer gráfico na empresa do meu amigo.<br/> 
                            <br/>
                            Busco desafios que me proporcione aprendizado constrante e a possibilidade de criar aplicações com qualidade. 
                        </Text>
                    </TitleContainer>
            </Container>
        </>
    );

}

export default About;