import React from 'react';
import { signOut } from '@firebase/auth';

import { auth } from '../../components/global/App';
import CustomButton from '../../components/global/custom-button/CustomButton';
import CustomText from '../../components/global/custom-text/CustomText';

import { HomeStyled as Styled } from './Home.styled';

const Home: React.FC = () => {
  const logout = () => {
    signOut(auth);
  };

  return (
    <Styled.Container>
      <CustomText>Main Screen, Edit Home.tsx to see changes</CustomText>
      <CustomButton onClick={logout}>Logout</CustomButton>
    </Styled.Container>
  );
};

export default Home;
