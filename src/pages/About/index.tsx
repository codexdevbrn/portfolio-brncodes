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
                    <Text>Apaixonado por tecnologia e inovações, comecei a trabalhar com esse segmento aos 14 anos em uma loja de informática, 
                        meu trabalho era garantir todo e qualquer tipo de manutenção e lá foi o início do meu aprendizado. </Text> 

                    <Text>Me formei em 2020 como Analista de Sistemas pela Universidade Unigranrio, que tinha como base de estudos ecossistema Java. </Text> 

                    <Text>Trabalho a mais de 6 anos como Administrador de Banco de Dados. Utilizando a linguagem SQL, sou responsável por manter o acesso aos dados, 
                        a segurança do banco e fazer manutenções periódicas para manter o bom fluxo dos dados. Temos um banco de dados relacional que cadastra pessoas para o 
                        Programa Habitacional do município onde resido.</Text>  

                    <Text>Minhas habilidades de desenvolvimento voltadas para front-end web e mobile são utilizando o ecossistema Javascript, com tecnologias como React e React-Native Framework, 
                        TypeScript e diversas ferramentas e libs. Para back-end utilizo Java ou Javascript.</Text> 

                    <Text>Possuo conhecimento de Design Patterns, Metodologias ágeis, Gerenciamento de estados, Hooks, ContextAPI, Consumo de API's, Boa lógica, 
                        criação de algoritmos e boas práticas de desenvolvimento. </Text>

                    <Text>Domino ferramentas como Figma, Photoshop e Illustrator, e nas horas vagas sou designer gráfico freelancer na Goulart Design Gráfico. </Text> 

                    <Text>Busco agora oportunidades na área de desenvolvimento web e mobile, tanto front quanto back-end, sou aberto a propostas em qualquer 
                        tipo de linguagem e estou aberto a aprender novas tecnologias para me qualificar para qualquer desafio.</Text> 
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