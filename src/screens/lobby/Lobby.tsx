import { useEffect, useState } from 'react';

import Board from '../../components/board/Board';
import CustomText from '../../components/global/custom-text/CustomText';
import { BoardEntity } from '../../models/BoardEntity';
import { Colors } from '../../models/Colors';
import { PlayerEntity } from '../../models/PlayerEntity';

import { LobbyStyled as Styled } from './Lobby.styled';

const Lobby: React.FC = () => {
  const [board, setBoard] = useState<BoardEntity>(new BoardEntity());
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [players, setPlayers] = useState<PlayerEntity[]>([
    new PlayerEntity(Colors.WHITE),
    new PlayerEntity(Colors.BLACK),
  ]);

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
      {isCheck && <CustomText>check</CustomText>}
      <Board board={board} setBoard={setBoard} setIsCheck={setIsCheck} players={players} />
    </Styled.Container>
  );
};

export default Lobby;
