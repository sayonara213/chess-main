import { BishopEntity } from './figures/BishopEntity';
import { FigureEntity } from './figures/FigureEntity';
import { KingEntity } from './figures/KingEntity';
import { KnightEntity } from './figures/KnightEntity';
import { PawnEntity } from './figures/PawnEntity';
import { QueenEntity } from './figures/QueenEntity';
import { RookEntity } from './figures/RookEntity';

import { CellEntity } from './CellEntity';
import { Colors } from './Colors';

export class BoardEntity {
  cells: CellEntity[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: CellEntity[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          row.push(new CellEntity(j, i, Colors.WHITE, this));
        } else {
          row.push(new CellEntity(j, i, Colors.BLACK, this));
        }
      }
      this.cells.push(row);
    }
    this.addFigures();
  }

  public getCell(x: number, y: number): CellEntity {
    return this.cells[y][x];
  }

  public clone(): BoardEntity {
    const board = new BoardEntity();
    board.cells = this.cells;
    return board;
  }

  public addFigures() {
    this.cells[0][0].setFigure(new RookEntity(Colors.BLACK, this.cells[0][0]));
    this.cells[0][7].setFigure(new RookEntity(Colors.BLACK, this.cells[0][7]));
    this.cells[7][0].setFigure(new RookEntity(Colors.WHITE, this.cells[7][0]));
    this.cells[7][7].setFigure(new RookEntity(Colors.WHITE, this.cells[7][7]));

    this.cells[0][1].setFigure(new KnightEntity(Colors.BLACK, this.cells[0][1]));
    this.cells[0][6].setFigure(new KnightEntity(Colors.BLACK, this.cells[0][6]));
    this.cells[7][1].setFigure(new KnightEntity(Colors.WHITE, this.cells[7][1]));
    this.cells[7][6].setFigure(new KnightEntity(Colors.WHITE, this.cells[7][6]));

    this.cells[0][2].setFigure(new BishopEntity(Colors.BLACK, this.cells[0][2]));
    this.cells[0][5].setFigure(new BishopEntity(Colors.BLACK, this.cells[0][5]));
    this.cells[7][2].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][2]));
    this.cells[7][5].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][5]));

    this.cells[0][3].setFigure(new QueenEntity(Colors.BLACK, this.cells[0][3]));
    this.cells[7][3].setFigure(new QueenEntity(Colors.WHITE, this.cells[7][3]));

    this.cells[0][4].setFigure(new KingEntity(Colors.BLACK, this.cells[0][4]));
    this.cells[7][4].setFigure(new KingEntity(Colors.WHITE, this.cells[7][4]));

    for (let i = 0; i < 8; i++) {
      this.cells[1][i].setFigure(new PawnEntity(Colors.BLACK, this.cells[1][i]));
      this.cells[6][i].setFigure(new PawnEntity(Colors.WHITE, this.cells[6][i]));
    }
    // this.cells[7][7].setFigure(new RookEntity(Colors.WHITE, this.cells[7][7]));
    // this.cells[7][6].setFigure(new KnightEntity(Colors.WHITE, this.cells[7][6]));
    // this.cells[7][5].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][5]));
  }
}
