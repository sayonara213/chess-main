export type TCustomButtonTypes = 'primary' | 'secondary' | 'red' | 'green' | 'disabled';

export interface ICustomButtonProps {
  children: JSX.Element | JSX.Element[] | string | string[];
  onClick?: () => void;
  buttonType?: TCustomButtonTypes;
  width?: string;
  height?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface ICustomButtonStyledProps {
  buttonType: TCustomButtonTypes;
  width: string;
  height: string;
}
