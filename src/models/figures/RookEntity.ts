import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class RookEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'rookWhite' : 'rookBlack', cell, Figures.ROOK);
  }

  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target) || this.cell.isEmptyHorizontal(target)) {
      if (super.preventCheck(target)) {
        return true;
      }
    }
    return false;
  }

  moveFigure(target: CellEntity) {
    super.moveFigure(target);
  }
}
