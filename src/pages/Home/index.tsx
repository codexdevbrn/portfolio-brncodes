
import {useEffect, useState} from 'react';
import { Container, ButtContainer, Name, Photo, Stats, Bio, } from './styles';
import {TiLocationOutline, TiMail} from 'react-icons/ti'

import { SocialProps } from '../../utils/socialMedia';
import SocialButton from '../../components/SocialButton';

import api from '../../service/api';
import { GithubTypes } from '../../@types/GithubTypes';

function Home() {
    const [response, setResponse] = useState<GithubTypes>();

    useEffect(() => {
        api.get('users/codexdevbrn').then(response => {
            setResponse(response.data);
        })
    }, []);

    return (
        <>
        <Container
        key='home'
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, 
                transition: {duration: 0.5} }}>
            <Photo src={response?.avatar_url}></Photo>
            <Name>{response?.name}</Name>
            <Bio>{response?.bio}</Bio>
            <div>
                <TiLocationOutline color='#FAC409' size={20} />
                <Stats>{response?.location}</Stats>
            </div>
            <div>
                <TiMail color='#FAC409' size={20} />
                <Stats>{response?.email}</Stats>
            </div>   
             <ButtContainer>
             <Bio>Social:</Bio>
            {SocialProps.map((social, idx) => {
                return(
                    <SocialButton 
                    url={social.url} 
                    idx={idx} 
                    color={social.color}/>
                )
            })}
            </ButtContainer>
        </Container>
    </>
    )

}

export default Home;