import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

export class KingEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'kingWhite' : 'kingBlack', cell);
  }
  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
