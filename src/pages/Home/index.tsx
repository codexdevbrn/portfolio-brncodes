import React, {useEffect, useState} from 'react';

import { Container, Name, Photo, Stats, Bio } from './styles';
import {TiLocationOutline, TiMail} from 'react-icons/ti'

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
        <Container>
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
        </Container>
    )

}

export default Home;