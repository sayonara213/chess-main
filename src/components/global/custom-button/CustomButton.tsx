import React from 'react';

import { CustomButtonStyled as Styled } from './CustomButton.styled';

import { ICustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  onClick,
  type = 'button',
  width = '100%',
  height = '50px',
  buttonType = 'primary',
}) => {
  return (
    <Styled.Button
      buttonType={buttonType}
      width={width}
      height={height}
      onClick={onClick}
      type={type}>
      <Styled.Span>{children}</Styled.Span>
    </Styled.Button>
  );
};

export default CustomButton;
