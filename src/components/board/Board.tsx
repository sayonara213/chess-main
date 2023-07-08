import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { CellEntity } from '../../models/CellEntity';

import Cell from './cell/Cell';

import { BoardStyled as Styled } from './Board.styled';

import { IBoardProps } from './Board.types';

const Board: React.FC<IBoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<CellEntity | null>(null);
  const [availableCells, setAvailableCells] = useState<CellEntity[]>([]);

  const getAvailableCells = (cell: CellEntity) => {
    const tempAvailableCells: CellEntity[] = [];
    board.cells.forEach((row) => {
      row.forEach((target) => {
        if (cell.figure?.canMove(target)) {
          tempAvailableCells.push(target);
        }
      });
    });
    return tempAvailableCells;
  };

  const click = (cell: CellEntity) => {
    if (
      selectedCell &&
      availableCells.some(
        (availableCell) => availableCell.x === cell.x && availableCell.y === cell.y,
      )
    ) {
      selectedCell.moveFigure(cell);
      resetCells();
      return;
    }

    if (cell.figure) {
      setSelectedCell(cell);
      setAvailableCells(getAvailableCells(cell));
    } else {
      resetCells();
    }
  };

  const resetCells = () => {
    setSelectedCell(null);
    setAvailableCells([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Styled.Container>
        {board.cells.map((row, id) => (
          <React.Fragment key={id}>
            {row.map((cell, id) => (
              <Cell
                key={id}
                cell={cell}
                onClick={click}
                isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                isAvailable={availableCells.some(
                  (availableCell) => availableCell.x === cell.x && availableCell.y === cell.y,
                )}
              />
            ))}
          </React.Fragment>
        ))}
      </Styled.Container>
    </DndProvider>
  );
};

export default Board;
