import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

import { auth } from '../components/global/App';

import { notifyError, notifySuccess } from './banners';

import { IAuthForm } from '../types/auth.types';

export const login = async (form: IAuthForm) => {
  try {
    const user = await signInWithEmailAndPassword(auth, form.email, form.password);
    notifySuccess('Logged in successfully');
    return user;
  } catch (error: any) {
    notifyError('Error occured');
  }
};

export const register = async (form: IAuthForm) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, form.email, form.password);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      notifyError('Email already registered');
      throw error;
    } else {
      notifyError('Registration failed');
      throw error;
    }
  }
};
