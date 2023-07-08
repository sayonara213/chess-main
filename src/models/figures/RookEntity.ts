import { BoardEntity } from '../BoardEntity';
import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

export class RookEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'rookWhite' : 'rookBlack', cell);
  }

  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }

  moveFigure(target: CellEntity) {
    super.moveFigure(target);
  }
}
