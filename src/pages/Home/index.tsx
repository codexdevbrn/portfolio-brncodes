import React, {useEffect, useState} from 'react';

import { Container, ButtContainer, Name, Photo, Stats, Bio, Button } from './styles';
import {TiLocationOutline, TiSocialLinkedin, TiSocialInstagramCircular /* TiMail */} from 'react-icons/ti'
import {DiGithubBadge}  from 'react-icons/di';

import api from '../../service/api';
import { GithubTypes } from '../../@types/GithubTypes';

function Home() {
    const [response, setResponse] = useState<GithubTypes>();

    useEffect(() => {
        api.get<GithubTypes>('users/codexdevbrn').then(response => {
            setResponse(response.data);
        })
    })

    return (
        <>
        <Container id='Home'>
            <Photo src={response?.avatar_url}></Photo>
            <Name>{response?.name}</Name>
            <Bio>{response?.bio}</Bio>
            <div>
                <TiLocationOutline color='#FAC409' size={20} />
                <Stats>{response?.location}</Stats>
            </div>
            {/* <div>
                <TiMail color='#FAC409' size={20} />
                <Stats>{response?.email}</Stats>
            </div> */}
             <ButtContainer>
            <Button href={response?.html_url}>
                <DiGithubBadge color='#FAC409' size={60} />
            </Button>
            <Button href='https://www.linkedin.com/in/brunoduarteads/'>
                <TiSocialLinkedin color='#FAC409' size={60} />
            </Button>
            <Button href='https://www.instagram.com/brn.codes/'>
                <TiSocialInstagramCircular color='#FAC409' size={60} />
            </Button>
            </ButtContainer>
        </Container>
    </>
    )

}

export default Home;