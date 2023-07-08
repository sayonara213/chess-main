import { useEffect, useState } from 'react';

import Board from '../../components/board/Board';
import { BoardEntity } from '../../models/BoardEntity';

import { LobbyStyled as Styled } from './Lobby.styled';

const Lobby: React.FC = () => {
  const [board, setBoard] = useState<BoardEntity>(new BoardEntity());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new BoardEntity();
    newBoard.initCells();
    setBoard(newBoard);
  };

  return (
    <Styled.Container>
      <Board board={board} setBoard={setBoard} />
    </Styled.Container>
  );
};

export default Lobby;
