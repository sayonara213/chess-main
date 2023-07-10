import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

import { Figures } from '../../types/figures.types';

export class PawnEntity extends FigureEntity {
  isFirstStep = true;

  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'pawnWhite' : 'pawnBlack', cell, Figures.PAWN);
  }

  canMove(target: CellEntity): boolean {
    if (!super.canMove(target)) return false;
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

    if (
      (target.y === this.cell.y + direction ||
        (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
      target.x === this.cell.x &&
      target.isEmpty()
    ) {
      if (super.preventCheck(target)) {
        return true;
      }
    }

    if (
      target.y === this.cell.y + direction &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
      this.cell.isEnemy(target)
    ) {
      if (super.preventCheck(target)) {
        return true;
      }
    }

    return false;
  }

  moveFigure(target: CellEntity) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
