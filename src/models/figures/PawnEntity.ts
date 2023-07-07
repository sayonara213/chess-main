import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

export class PawnEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'pawnWhite' : 'pawnBlack', cell);
  }
}
