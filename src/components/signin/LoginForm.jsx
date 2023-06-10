import useField from 'hook/useField';

const LoginForm = () => {
  const [email, handleEmailChange] = useField('');
  const [password, handlePasswordChange] = useField('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

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
        <button data-testid='signin-button' type='submit'>
          로그인
        </button>
      </form>
      <a href='/signup'>회원가입</a>
    </>
  );
};

export default LoginForm;
