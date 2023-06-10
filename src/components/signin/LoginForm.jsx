import { useEffect, useState } from 'react';
import useField from 'hook/useField';

const emailRegex = /.@./;
const passwordRegex = /.{8,}/;

const LoginForm = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

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
        <input
          data-testid='email-input'
          type='email'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          data-testid='password-input'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button data-testid='signin-button' type='submit' disabled={disabled}>
          로그인
        </button>
      </form>
      <a href='/signup'>회원가입</a>
    </>
  );
};

export default LoginForm;
