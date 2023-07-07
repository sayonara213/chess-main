import { FigureEntity } from './figures/FigureEntity';

import { Colors } from './Colors';

export class CellEntity {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  isAvailable = false;
  figure: FigureEntity | null = null;

  constructor(x: number, y: number, color: Colors) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  setFigure(figure: FigureEntity) {
    this.figure = figure;
  }

  moveFigureTo(cell: CellEntity) {
    if (this.figure) {
      this.figure.move(cell);
      this.figure = null;
    }
  }
}
