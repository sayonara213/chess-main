import React, { useState } from 'react';

import Icon from '../custom-icon/Icon';

import { CustomInputStyled as Styled } from './CustomInput.styled';

import { ICustomInputProps } from './CustomInput.types';

const CustomInput: React.FC<ICustomInputProps> = ({
  value,
  onChange,
  placeholder,
  width = '100%',
  height = '30px',
  autoFocus = false,
  fontFamily = 'regular',
  fontSize = 'medium',
  color = 'text',
  isPassword = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Styled.Container width={width} height={height}>
      <Styled.InputContainer>
        <Styled.Input
          type={isPassword ? (isVisible ? 'text' : 'password') : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
        />
        {isPassword && (
          <Icon
            type={isVisible ? 'hide' : 'show'}
            onClick={handleVisibility}
            width='24px'
            height='24px'
          />
        )}
      </Styled.InputContainer>
      <Styled.Line />
    </Styled.Container>
  );
};

export default CustomInput;
