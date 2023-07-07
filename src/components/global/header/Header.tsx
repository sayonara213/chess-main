import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../constants/routes';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { switchTheme } from '../../../redux/theme.slice';
import Icon from '../custom-icon/Icon';
import CustomInput from '../custom-input/CustomInput';
import CustomText from '../custom-text/CustomText';
import Logo from '../logo/Logo';
import { HeaderStyled as Styled } from './Header.styled';

const Header: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [userName, setUserName] = useState<string>('temp user');

  const navigate = useNavigate();

  const back = () => {
    navigate(ROUTES.home);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <Styled.Container>
      <Logo onClick={back} />
      <Styled.ParamsWrapper>
        {isEditing ? (
          <Styled.UserContainer>
            <CustomInput value={userName} onChange={setUserName} autoFocus={true} />
            <Icon type='done' fadeIn={true} />
          </Styled.UserContainer>
        ) : (
          <Styled.UserContainer>
            <CustomText>{userName}</CustomText>
            <Icon type='edit' onClick={handleEdit} />
          </Styled.UserContainer>
        )}
        <Icon type={theme.isLight ? 'bulb' : 'bulbFill'} onClick={handleSwitchTheme} />
      </Styled.ParamsWrapper>
    </Styled.Container>
  );
};

export default Header;
