import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class QueenEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'queenWhite' : 'queenBlack', cell, Figures.QUEEN);
  }
  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    if (
      this.cell.isEmptyVertical(target) ||
      this.cell.isEmptyHorizontal(target) ||
      this.cell.isEmptyDiagonal(target)
    ) {
      if (super.preventCheck(target)) {
        return true;
      }
    }
    return false;
  }
}
