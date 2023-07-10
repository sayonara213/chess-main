import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class KnightEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'knightWhite' : 'knightBlack', cell, Figures.KNIGHT);
  }

  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    const dx = Math.abs(target.x - this.cell.x);
    const dy = Math.abs(target.y - this.cell.y);

    if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
      if (target.isEmpty() || target.figure?.color !== this.color) {
        if (super.preventCheck(target)) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  moveFigure(target: CellEntity) {
    super.moveFigure(target);
  }
}
