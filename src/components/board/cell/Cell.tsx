import React, { useEffect, useState } from 'react';
import { DragPreviewImage, useDrag, useDrop } from 'react-dnd';

import { CellEntity } from '../../../models/CellEntity';
import { figuresMap } from '../../../models/figures/FiguresMap';

import { CellStyled as Styled } from './Cell.styled';

import { ICellProps } from './Cell.types';

const Cell: React.FC<ICellProps> = ({ cell, onClick, isSelected, isAvailable }) => {
  // const [draggingCell, setDraggingCell] = useState<CellEntity>({} as CellEntity);

  // const [{ isOver }, drop] = useDrop(
  //   () => ({
  //     accept: 'figure',
  //     drop: () => moveFigure(),
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver(),
  //     }),
  //   }),
  //   [cell],
  // );

  // const [{ isDragging }, drag, preview] = useDrag(() => ({
  //   type: 'figure',
  //   item: { cell },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  // // useEffect(() => {
  // //   console.log(cell);
  // // }, [isOver]);

  // useEffect(() => {
  //   if (isDragging) {
  //     setDraggingCell(cell);
  //   }
  // }, [isDragging]);

  // const moveFigure = () => {
  //   draggingCell.moveFigureTo(cell);
  // };

  return (
    <Styled.Cell color={cell.color} onClick={() => onClick(cell)} isSelected={isSelected}>
      {cell.figure && (
        <>
          <Styled.FigureContainer>
            <Styled.Figure src={figuresMap[cell.figure.type]} />
          </Styled.FigureContainer>
        </>
      )}
      {isAvailable && <Styled.Available />}
    </Styled.Cell>
  );
};

export default Cell;
