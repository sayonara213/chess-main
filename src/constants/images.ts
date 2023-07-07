import bulbBlack from '../assets/icons/bulb-black.svg';
import bulbFillBlack from '../assets/icons/bulb-filled-black.svg';
import bulbFill from '../assets/icons/bulb-filled-white.svg';
import bulb from '../assets/icons/bulb-white.svg';
import copyBlack from '../assets/icons/copy-black.svg';
import copy from '../assets/icons/copy-white.svg';
import trashBlack from '../assets/icons/delete-black.svg';
import trash from '../assets/icons/delete-white.svg';
import doneBlack from '../assets/icons/done-black.svg';
import done from '../assets/icons/done-white.svg';
import editBlack from '../assets/icons/edit-black.svg';
import edit from '../assets/icons/edit-white.svg';

export const IMAGES = {
  bulb,
  bulbFill,
  edit,
  copy,
  trash,
  bulbBlack,
  bulbFillBlack,
  editBlack,
  copyBlack,
  trashBlack,
  done,
  doneBlack,
};

export type TIcon = keyof typeof IMAGES;
