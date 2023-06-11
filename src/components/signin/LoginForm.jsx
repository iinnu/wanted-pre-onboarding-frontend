import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useField from 'hook/useField';
import apiInstance from 'api';
import * as S from 'components/common';

const emailRegex = /.@./;
const passwordRegex = /.{8,}/;

const LoginForm = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isLogin = await apiInstance.post('/auth/signin', {
        email,
        password,
      });

      if (isLogin.status === 200) {
        const { access_token } = isLogin.data;
        localStorage.setItem('accessToken', access_token);
        navigate('/todo');
      }
    } catch {
      alert('이메일이나 비밀번호를 확인해주세요.');
    }
  };

  useEffect(() => {
    const isEmailOk = emailRegex.test(email);
    const isPasswordOk = passwordRegex.test(password);
    if (isEmailOk && isPasswordOk) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <S.Grid col>
          <S.Input
            data-testid='email-input'
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
          />
          <S.Input
            data-testid='password-input'
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
          <S.BigButton
            data-testid='signin-button'
            type='submit'
            disabled={disabled}
          >
            로그인
          </S.BigButton>
        </S.Grid>
      </form>
      <S.A href='/signup'>회원가입</S.A>
    </>
  );
};

export default LoginForm;
