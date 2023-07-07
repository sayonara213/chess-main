import React from 'react';
import { useFormik } from 'formik';

import CustomButton from '../../components/global/custom-button/CustomButton';
import CustomInput from '../../components/global/custom-input/CustomInput';

import { AuthStyled as Styled } from './Auth.styled';

import { login, register } from '../../services/auth.service';

import { IMAGES } from '../../constants/images';
import { validationSchema } from '../../constants/validation/validation';
import { ROUTES } from './../../constants/routes';

import { IAuthForm, IAuthProps } from '../../types/auth.types';

const Auth: React.FC<IAuthProps> = ({ isLogin }) => {
  const formInputs = ['Email', 'Password'];
  const initialValues: IAuthForm = {
    email: '',
    password: '',
  };

  const onSubmit = async (formsData: IAuthForm) => {
    isLogin ? await login(formsData) : await register(formsData);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Styled.Container>
      <Styled.AuthWrap onSubmit={formik.handleSubmit}>
        <Styled.AuthTitleWrap>
          <Styled.Logo src={IMAGES.done} />
        </Styled.AuthTitleWrap>
        {formInputs.map((input, index) => (
          <Styled.AuthInputWrap key={index}>
            <CustomInput
              key={index}
              placeholder={input}
              value={formik.values[input.toLowerCase()]}
              onChange={formik.handleChange(input.toLowerCase())}
              isPassword={input === 'Password'}
            />
          </Styled.AuthInputWrap>
        ))}
        <CustomButton
          type={'submit'}
          buttonType={!formik.errors.email && !formik.errors.password ? 'primary' : 'disabled'}>
          {isLogin ? 'LOG IN' : 'CREATE'}
        </CustomButton>
        <Styled.AuthAdditional to={isLogin ? ROUTES.auth.register : ROUTES.auth.login}>
          {isLogin ? 'Create an account' : 'Already have an account?'}
        </Styled.AuthAdditional>
      </Styled.AuthWrap>
    </Styled.Container>
  );
};

export default Auth;
