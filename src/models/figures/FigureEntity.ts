import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { figuresMap } from './FiguresMap';

import { Figures } from '../../types/figures.types';

export class FigureEntity {
  color: Colors;
  type: keyof typeof figuresMap;
  cell: CellEntity;
  name: Figures | null = null;

  constructor(color: Colors, type: keyof typeof figuresMap, cell: CellEntity, name: Figures) {
    this.color = color;
    this.type = type;
    this.cell = cell;
    this.name = name;
  }

  canMove(target: CellEntity): boolean {
    if (target.figure?.color === this.color) return false;

    return true;
  }

  preventCheck(target: CellEntity) {
    console.log(this.cell);

    const originalCell = this.cell;
    const originalTargetFigure = target.figure;
    this.cell.figure = null;
    target.figure = this;

    const isInCheck = this.cell.board.isCheck(this.color);

    this.cell = originalCell;
    this.cell.figure = this;
    target.figure = originalTargetFigure;

    return !isInCheck;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  moveFigure(target: CellEntity) {}
}
