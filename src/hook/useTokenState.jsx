const useTokenState = () => {
  const isToken = localStorage.getItem('accessToken') !== null;
  return isToken;
};

export default useTokenState;
