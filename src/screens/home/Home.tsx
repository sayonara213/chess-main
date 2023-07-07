import React from 'react';

import CustomText from '../../components/global/custom-text/CustomText';
import { HomeStyled as Styled } from './Home.styled';

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <CustomText>Main Screen, Edit Home.tsx to see changes</CustomText>
    </Styled.Container>
  );
};

export default Home;
