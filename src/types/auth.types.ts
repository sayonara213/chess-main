export interface IAuthProps {
  isLogin: boolean;
}

export interface IAuthForm {
  email: string;
  password: string;

  [key: string]: string;
}
