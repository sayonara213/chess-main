import styled from 'styled-components';

export const LogoStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 2px;
    cursor: pointer;
  `,
  Letter: styled.span`
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    color: ${({ theme }) => theme.color.text};
    font-family: 'medium';
    text-transform: uppercase;
  `,
};
