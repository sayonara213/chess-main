import React from 'react';

import { CustomTextStyled as Styled } from './CustomText.styled';

import { ICustomTextProps } from './CustomText.types';

const CustomText: React.FC<ICustomTextProps> = ({
  children,
  fontFamily = 'regular',
  fontSize = 'medium',
  color = 'text',
  width = 'auto',
  height = 'auto',
  textAlign = 'left',
}) => {
  return (
    <Styled.Text
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      width={width}
      height={height}
      textAlign={textAlign}>
      {children}
    </Styled.Text>
  );
};

export default CustomText;
