import React, { useState } from 'react';
import { DragPreviewImage, useDrag, useDrop } from 'react-dnd';

import { figuresMap } from '../../../models/figures/FiguresMap';

import { CellStyled as Styled } from './Cell.styled';

import { ICellProps } from './Cell.types';

const Cell: React.FC<ICellProps> = ({ cell, onClick, isSelected, isAvailable }) => {
  const [{ isDragging }, dragRef, preview] = useDrag({
    type: 'figure',
    item: cell,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: 'figure',
    drop: () => {
      onClick(cell);
    },
    canDrop: () => isAvailable,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <Styled.Cell
      ref={dropRef}
      color={cell.color}
      onMouseDown={() => onClick(cell)}
      isSelected={isSelected || (isOver && canDrop)}>
      {cell.figure && (
        <>
          <DragPreviewImage src={figuresMap[cell.figure.type]} connect={preview} />
          <Styled.FigureContainer ref={dragRef}>
            <Styled.Figure
              src={figuresMap[cell.figure.type]}
              style={{ opacity: isDragging ? 0.5 : 1 }}
            />
          </Styled.FigureContainer>
        </>
      )}
      {isAvailable && <Styled.Available />}
    </Styled.Cell>
  );
};

export default Cell;
