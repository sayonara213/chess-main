import { CellEntity } from '../CellEntity';
import { Colors } from '../Colors';

import { FigureEntity } from './FigureEntity';

export class RookEntity extends FigureEntity {
  constructor(color: Colors, cell: CellEntity) {
    super(color, color === Colors.WHITE ? 'rookWhite' : 'rookBlack', cell);
  }
}
