import styled, { css } from 'styled-components';

import { Colors } from '../../../models/Colors';

const cellColors = {
  selected: css`
    background-color: ${({ theme }) => theme.color.dark};
  `,
};

export const CellStyled = {
  Cell: styled.div<{ color: Colors; isSelected: boolean }>`
    background-color: ${({ theme, color }) =>
      color === Colors.BLACK ? theme.color.cellBlack : theme.color.cellWhite};
    ${({ isSelected }) => isSelected && cellColors.selected};
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
  Available: styled.div`
    position: absolute;
    width: 30%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.dark};

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
