import { BoardEntity } from '../../models/BoardEntity';
import { PlayerEntity } from '../../models/PlayerEntity';

export interface IBoardProps {
  board: BoardEntity;
  players: PlayerEntity[];
  setBoard: any;
  setIsCheck: any;
}
