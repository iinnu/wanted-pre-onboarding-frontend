import useTokenState from 'hook/useTokenState';
import { Navigate } from 'react-router-dom';

const PrivateAuth = ({ Component, redirectURL }) => {
  const isToken = useTokenState();

  return (
    <>
      {isToken && <Component />}
      {!isToken && <Navigate to={redirectURL} />}
    </>
  );
};

export default PrivateAuth;
