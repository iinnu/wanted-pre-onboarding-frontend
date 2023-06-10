import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
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
      <button data-testid='signin-button' type='submit'>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
