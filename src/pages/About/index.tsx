import { Container, Text, TextContainer} from "./styles";
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
                    transition: {duration: 0.5, ease: "circIn"}}}>
                <Titles item={title}/>
                    <TextContainer>
                    <Text>
                        Profissional experiente em tecnologia da informação, com sólida formação em Análise de Sistemas e mais de 6 anos de experiência em gerenciamento e análise de dados.
                    </Text>

                    <Text>
                        Iniciei minha jornada na área de tecnologia aos 14 anos, trabalhando com manutenção de computadores e redes. Desde então, venho expandindo constantemente meus conhecimentos e habilidades técnicas.
                    </Text>

                    <Text>
                        Como Analista de Dados, contribuo para estratégias baseadas em dados pré-estruturados, desenvolvo soluções para otimização de processos e gerencio bancos de dados relacionais, garantindo a segurança e eficiência no fluxo de informações.
                    </Text>

                    <Text>
                        Possuo experiência sólida no desenvolvimento web e mobile utilizando tecnologias modernas como JavaScript, TypeScript, React, React Native, Vue.js e Node.js. Aplico consistentemente práticas de Clean Code, Design Patterns e metodologias ágeis.
                    </Text>

                    <Text>
                        Minha expertise inclui Python para análise de dados, SQL para gerenciamento de banco de dados, e domínio de ferramentas de versionamento como Git Flow.
                    </Text>

                    <Text>
                        Além das habilidades técnicas, possuo conhecimento profissional em ferramentas de design como Figma, Adobe Photoshop e Illustrator, permitindo uma abordagem completa no desenvolvimento de interfaces e experiências de usuário.
                    </Text>

                    <Text>
                        Busco constantemente aprimorar minhas habilidades e conhecimentos, estando sempre aberto a novos desafios e tecnologias que possam agregar valor aos projetos em que atuo.
                    </Text>
                    </TextContainer>
            </Container>
        </>
    );
}

export default About;