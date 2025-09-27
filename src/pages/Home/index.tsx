import { useEffect, useState } from 'react';
import { GithubTypes } from '../../@types/GithubTypes';

import {
  Container,
  ButtContainer,
  Name,
  Photo,
  Bio,
  Adjust,
  More
} from './styles';

import { TiLocationOutline, TiMail } from 'react-icons/ti';
import SocialButton from '../../components/SocialButton';

import api from '../../service/api';
import { SocialProps } from '../../utils/socialMedia';
import { useTheme } from '../../theme';

function Home() {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<GithubTypes | null>(() => {
    const storageData = localStorage.getItem('apiData');
    return storageData ? (JSON.parse(storageData) as GithubTypes) : null;
  });

  useEffect(() => {
    let mounted = true;

    const fetchProfile = async () => {
      if (profile) return;
      try {
        const res = await api.get<GithubTypes>('users/codexdevbrn');
        if (!mounted) return;
        setProfile(res.data);
        localStorage.setItem('apiData', JSON.stringify(res.data));
      } catch (err) {
        console.error('GitHub API error', err);
      }
    };

    fetchProfile();

    return () => {
      mounted = false;
    };
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      key="home"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Adjust>
        <Photo src={profile?.avatar_url} alt={profile?.name ?? 'avatar'} />
        <Name>{profile?.name}</Name>
      </Adjust>

      <Bio>{profile?.bio}</Bio>

      <More>
        <TiLocationOutline color={theme.COLORS.SUCCESS} size={20} />
        <span>{profile?.location}</span>
      </More>

      <More>
        <TiMail color={theme.COLORS.SUCCESS} size={20} />
        <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
      </More>

      {/* <ButtContainer>
        <h2>Social:</h2>
        {SocialProps.map((social) => (
          <SocialButton
            key={social.id}
            url={social.url}
            idx={social.id}
            color={social.color}
          />
        ))}
      </ButtContainer> */}
    </Container>
  );
}

export default Home;