import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class BishopEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'bishopWhite' : 'bishopBlack', cell, Figures.BISHOP);
  }
  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) {
      if (super.preventCheck(target)) {
        return true;
      }
    }
    return false;
  }
}
