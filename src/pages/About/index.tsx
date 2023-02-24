import { Container, Text, TextContainer, PartContainer, PartTitle } from "./styles";
import Titles from "../../components/Titles";
import Partners from "../../components/Partners";

function About() {
    const title = 'Sobre';
    return(
        <>
            <Container
                key='about'
                initial={{width: 0}} 
                animate={{width: "100%"}} 
                exit={{x: window.innerWidth, 
                    transition: {duration: 0.5, ease: "circIn"}}}>
                <Titles item={title}/>
                    <TextContainer>
                        <Text>Apaixonado por tecnologia e inovações, formado como analista de sistemas e eterno estudante.</Text>
                        
                        <Text> Minhas habilidades de desenvolvimento são voltadas para front-end  web e mobile utilizando o ecossistema Javascript, 
                        com tecnologias como React e React-Native Framework, TypeScript e diversas ferramentas e libs.</Text>

                        <Text>Possuo conhecimento com desenvolvimento back-end utilizando stacks Javascript e Java.</Text>
                        
                        <Text>Domino ferramentas como Figma, Photoshop e Illustrator, e nas horas vagas sou designer gráfico freelancer</Text>
                        
                        <Text>Trabalho a mais de 6 anos como Administrador de Banco de Dados MySql e estou em busca desafios que me proporcione aprendizado 
                        constante e a possibilidade de criar aplicações com qualidade.</Text>
                    </TextContainer>

                    <PartTitle>Parceiros que confiam no meu trabalho:</PartTitle>
                        <PartContainer>
                            <Partners/>
                        </PartContainer>

            </Container>
        </>
    );
}

export default About;