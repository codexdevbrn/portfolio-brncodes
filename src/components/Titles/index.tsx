import { BoxTitle, Title } from './styles';

interface TitleProps {
item: string;
}

function Titles({item}: TitleProps){
    return (
        <BoxTitle>
            <Title>{item}</Title>
        </BoxTitle>
    );
}

export default Titles;