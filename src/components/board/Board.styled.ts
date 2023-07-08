import styled from 'styled-components';

export const BoardStyled = {
  Container: styled.div`
    width: 40%;
    aspect-ratio: 1;

    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);

    background-color: ${({ theme }) => theme.color.light};
  `,
};
