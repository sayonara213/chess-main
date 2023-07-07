import React from 'react';
import { DragPreviewImage, useDrag, useDrop } from 'react-dnd';

import { figuresMap } from '../../../models/figures/FiguresMap';

import { CellStyled as Styled } from './Cell.styled';

import { ICellProps } from './Cell.types';

const Cell: React.FC<ICellProps> = ({ cell }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'figure',
      drop: () => moveFigure(),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [cell],
  );

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'figure',
    item: { cell },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const moveFigure = () => {
    cell.moveFigureTo(cell);
  };

  return (
    <Styled.Cell color={cell.color} ref={drop}>
      {cell.figure && (
        <>
          <DragPreviewImage connect={preview} src={figuresMap[cell.figure.type]} />
          <Styled.FigureContainer ref={drag}>
            <Styled.Figure src={figuresMap[cell.figure.type]} />
          </Styled.FigureContainer>
        </>
      )}
    </Styled.Cell>
  );
};

export default Cell;
