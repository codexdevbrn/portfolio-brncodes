
import {Button} from './styles';
import { Social } from '../../utils/socialMedia';

interface Props {
    url: string;
    idx: number;
    color: string;
}

function SocialButton({url, idx, color}: Props) {
    const Icons = Social[idx];
    return (
        <Button href={url} target="_blank">
            <Icons color={color}/>
        </Button>
);
}
export default SocialButton;