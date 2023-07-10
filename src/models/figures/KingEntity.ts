import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class KingEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'kingWhite' : 'kingBlack', cell, Figures.KING);
  }
  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isNear(target) && super.preventCheck(target)) {
      return true;
    }
    return false;
  }
}
