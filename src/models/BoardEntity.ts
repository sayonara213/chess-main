import { BishopEntity } from './figures/BishopEntity';
import { KingEntity } from './figures/KingEntity';
import { KnightEntity } from './figures/KnightEntity';
import { PawnEntity } from './figures/PawnEntity';
import { QueenEntity } from './figures/QueenEntity';
import { RookEntity } from './figures/RookEntity';

import { CellEntity } from './CellEntity';
import { Colors } from './Colors';

import { Figures } from '../types/figures.types';

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

  public getCopyBoard(): BoardEntity {
    const newBoard = new BoardEntity();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public getCell(x: number, y: number): CellEntity {
    return this.cells[y][x];
  }

  public clone(): BoardEntity {
    const board = new BoardEntity();
    board.cells = this.cells;
    return board;
  }

  findKing(color: Colors): KingEntity {
    return this.cells
      .flat()
      .find((cell) => cell.figure?.name === Figures.KING && cell.figure?.color === color) // temp
      ?.figure as KingEntity;
  }

  public isCheck(color: Colors): boolean {
    const king = this.findKing(color);

    for (const row of this.cells) {
      for (const cell of row) {
        if (king && cell.figure?.color !== color && cell.figure?.canMove(king.cell)) {
          return true;
        }
      }
    }
    return false;
  }

  public isCellUnderAttack(cell: CellEntity, attackingColor: Colors): boolean {
    for (const row of this.cells) {
      for (const cellEntity of row) {
        if (cellEntity.figure?.color === attackingColor && cellEntity.figure?.canMove(cell)) {
          return true;
        }
      }
    }
    return false;
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
    this.cells[2][0].setFigure(new BishopEntity(Colors.BLACK, this.cells[2][0]));
    this.cells[7][2].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][2]));
    this.cells[7][5].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][5]));

    this.cells[0][3].setFigure(new QueenEntity(Colors.BLACK, this.cells[0][3]));
    this.cells[3][3].setFigure(new QueenEntity(Colors.WHITE, this.cells[3][3]));

    this.cells[0][4].setFigure(new KingEntity(Colors.BLACK, this.cells[0][4]));
    this.cells[7][4].setFigure(new KingEntity(Colors.WHITE, this.cells[7][4]));

    // for (let i = 0; i < 8; i++) {
    //   this.cells[1][i].setFigure(new PawnEntity(Colors.BLACK, this.cells[1][i]));
    //   this.cells[6][i].setFigure(new PawnEntity(Colors.WHITE, this.cells[6][i]));
    // }
    // this.cells[7][7].setFigure(new RookEntity(Colors.WHITE, this.cells[7][7]));
    // this.cells[7][6].setFigure(new KnightEntity(Colors.WHITE, this.cells[7][6]));
    // this.cells[7][5].setFigure(new BishopEntity(Colors.WHITE, this.cells[7][5]));
  }
}
