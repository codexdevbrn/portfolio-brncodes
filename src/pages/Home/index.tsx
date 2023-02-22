import {useEffect, useState} from 'react';
import { GithubTypes } from '../../@types/GithubTypes';

import {Container, 
    ButtContainer, 
    Name, 
    Photo, 
    Stats, 
    Bio, 
    Adjust} from './styles';
import {TiLocationOutline, TiMail} from 'react-icons/ti'

import SocialButton from '../../components/SocialButton';

import api from '../../service/api';
import { SocialProps } from '../../utils/socialMedia';

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
        exit={{x: window.innerWidth, 
                transition: {duration: 0.5} }}>
            <Adjust>
            <Photo src={response?.avatar_url}></Photo>
            <Name>{response?.name}</Name>
            </Adjust>
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