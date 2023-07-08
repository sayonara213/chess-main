import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

export class PawnEntity extends FigureEntity {
  isFirstStep = true;

  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'pawnWhite' : 'pawnBlack', cell);
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
      return true;
    }

    return false;
  }

  moveFigure(target: CellEntity) {
    super.moveFigure(target);
    this.isFirstStep = false;
  }
}
