import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { CellEntity } from '../../models/CellEntity';
import { Colors } from '../../models/Colors';

import Cell from './cell/Cell';

import { BoardStyled as Styled } from './Board.styled';

import { IBoardProps } from './Board.types';

const Board: React.FC<IBoardProps> = ({ board, setBoard, setIsCheck, players }) => {
  const [selectedCell, setSelectedCell] = useState<CellEntity | null>(null);
  const [availableCells, setAvailableCells] = useState<CellEntity[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);

  useEffect(() => {
    const isCheck = board.isCheck(
      currentPlayer.color === Colors.WHITE ? Colors.BLACK : Colors.WHITE,
    );
    setIsCheck(isCheck);

    switchPlayer();
  }, [board]);

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
      ) &&
      currentPlayer.color === selectedCell.figure?.color
    ) {
      selectedCell.moveFigure(cell);
      updateBoard();
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

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const switchPlayer = () => {
    const newPlayer = currentPlayer === players[0] ? players[1] : players[0];
    setCurrentPlayer(newPlayer);
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
