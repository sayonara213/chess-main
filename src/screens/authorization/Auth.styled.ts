import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  `,
  AuthWrap: styled.form`
    width: 306px;

    display: flex;
    flex-direction: column;
  `,
  AuthTitleWrap: styled.div`
    width: 100%;

    margin-bottom: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  Logo: styled.img`
    width: 180px;

    object-fit: contain;
  `,
  AuthAdditionalWrap: styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  LoginWrap: styled.div`
    width: 100%;

    display: flex;
    align-items: center;
  `,
  AuthAdditional: styled(Link)`
    text-decoration: none;
    margin-top: 20px;

    font-family: ${({ theme }) => theme.font.regular};
    color: ${({ theme }) => theme.color.text};
  `,
  AuthInputWrap: styled.div`
    width: 100%;
    margin-bottom: 20px;
  `,
};
