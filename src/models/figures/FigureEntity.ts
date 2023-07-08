import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { figuresMap } from './FiguresMap';

export class FigureEntity {
  color: Colors;
  type: keyof typeof figuresMap;
  cell: CellEntity;

  constructor(color: Colors, type: keyof typeof figuresMap, cell: CellEntity) {
    this.color = color;
    this.type = type;
    this.cell = cell;
  }

  canMove(target: CellEntity): boolean {
    if (target.figure?.color === this.color) return false;
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  moveFigure(target: CellEntity) {}
}
