import { CellEntity } from '../../../models/CellEntity';
import { Colors } from '../../../models/Colors';

export interface ICellProps {
  cell: CellEntity;
  onClick: any;
  isSelected: boolean;
  isAvailable: boolean;
}
