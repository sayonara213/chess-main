import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Cell from './cell/Cell';

import { BoardStyled as Styled } from './Board.styled';

import { IBoardProps } from './Board.types';

const Board: React.FC<IBoardProps> = ({ board, setBoard }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Styled.Container>
        {board.cells.map((row, id) => (
          <React.Fragment key={id}>
            {row.map((cell, id) => (
              <Cell key={id} cell={cell} />
            ))}
          </React.Fragment>
        ))}
      </Styled.Container>
    </DndProvider>
  );
};

export default Board;
