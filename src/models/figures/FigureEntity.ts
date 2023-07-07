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

  move(cell: CellEntity) {
    this.cell = cell;
    cell.setFigure(this);
  }
}
