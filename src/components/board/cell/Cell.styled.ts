import styled from 'styled-components';

import { Colors } from '../../../models/Colors';

export const CellStyled = {
  Cell: styled.div<{ color: Colors }>`
    background-color: ${({ theme, color }) =>
      color === Colors.BLACK ? theme.color.dark : theme.color.light};

    position: relative;
  `,
  FigureContainer: styled.div`
    width: 100%;
    height: 100%;
  `,
  Figure: styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `,
};
