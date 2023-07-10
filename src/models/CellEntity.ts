import { FigureEntity } from './figures/FigureEntity';
import { KingEntity } from './figures/KingEntity';

import { BoardEntity } from './BoardEntity';
import { Colors } from './Colors';

export class CellEntity {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  board: BoardEntity;
  figure: FigureEntity | null = null;

  constructor(x: number, y: number, color: Colors, board: BoardEntity) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
  }

  setFigure(figure: FigureEntity) {
    this.figure = figure;
  }

  moveFigure(target: CellEntity) {
    if (this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      target.figure.cell = target;
      this.figure = null;
    }
  }

  isEmpty() {
    return this.figure === null;
  }

  isEnemy(target: CellEntity): boolean {
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

  isNear(target: CellEntity): boolean {
    const dx = Math.abs(target.x - this.x);
    const dy = Math.abs(target.y - this.y);
    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1) || (dx === 1 && dy === 1);
  }

  isEmptyVertical(target: CellEntity): boolean {
    if (this.x !== target.x) {
      return false;
    }

    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  isEmptyHorizontal(target: CellEntity): boolean {
    if (this.y !== target.y) {
      return false;
    }

    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);
    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiagonal(target: CellEntity): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX) return false;

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absY; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) return false;
    }
    return true;
  }
}
