import { useEffect, useState } from 'react';
import { GithubTypes } from '../../@types/GithubTypes';

import {Container, 
    ButtContainer, 
    Name, 
    Photo,
    Bio, 
    Adjust,
    More} from './styles';

import {TiLocationOutline, TiMail} from 'react-icons/ti'
import SocialButton from '../../components/SocialButton';

import api from '../../service/api';
import { SocialProps } from '../../utils/socialMedia';
import { THEME } from '../../theme';

function Home() {
    const [response, setResponse] = useState(() => {
        const storageData = localStorage.getItem('apiData');
        if (storageData) {
          return JSON.parse(storageData);
        }
        return null;
      });

    useEffect(() => {
        if (!response) {
        api.get('users/codexdevbrn').then(response => {
            const data: GithubTypes = response.data;
            setResponse(data);
            localStorage.setItem('apiData', JSON.stringify(data))
        }).catch(err => {
            console.log(err);
        })
    }
    }, [response]);

    return (
    <>
        <Container
        key='home'
        initial={{width: 0}} 
        animate={{width: "100%"}} 
        exit={{x: window.innerWidth, transition: {duration: 0.5}}}>
            <Adjust>
            <Photo src={response?.avatar_url}></Photo>
            <Name>{response?.name}</Name>
            </Adjust>
            <Bio>{response?.bio}</Bio>
            <More>
                <TiLocationOutline color={THEME.COLORS.SUCCESS} size={20} />
                <span>{response?.location}</span>
            </More>
            <More>
                <TiMail color={THEME.COLORS.SUCCESS} size={20} />
                <a href="mailto:brunoduarte.inf@outlook.com">{response?.email}</a>
            </More>   
             <ButtContainer>
             <h2>Social:</h2>
            {SocialProps.map((social, idx) => {
                return(
                    <SocialButton 
                    url={social.url} 
                    idx={idx} 
                    color={social.color}
                    key={idx}/>
                )
            })}
            </ButtContainer>
        </Container>
    </>
    )

}

export default Home;