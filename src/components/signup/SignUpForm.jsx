import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useField from 'hook/useField';
import apiInstance from 'api';
import * as S from 'components/common';

const emailRegex = /.@./;
const passwordRegex = /.{8,}/;

const SignUpForm = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isSignUp = await apiInstance.post('/auth/signup', {
        email,
        password,
      });

      if (isSignUp.status === 201) {
        alert('회원가입이 완료되었습니다!');
        navigate('/signin');
      }
    } catch {
      alert('이미 존재하는 이메일이거나 형식이 맞지 않습니다.');
    }
  };

  // 유효성 검사
  useEffect(() => {
    const isEmailOk = emailRegex.test(email);
    const isPasswordOk = passwordRegex.test(password);
    if (isEmailOk && isPasswordOk) {
      setDisabled(false);
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
            data-testid='signup-button'
            type='submit'
            disabled={disabled}
          >
            회원가입
          </S.BigButton>
        </S.Grid>
      </form>
      <S.A href='/signin'>로그인</S.A>
    </>
  );
};

export default SignUpForm;
