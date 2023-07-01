import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import SignInPage from 'pages/SignInPage';
import SignUpPage from 'pages/SignUpPage';
import TodoPage from 'pages/TodoPage';
import PublicAuth from 'auth/PublicAuth';
import PrivateAuth from 'auth/PrivateAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/signin" />,
  },
  {
    path: '/signin',
    element: <PublicAuth Component={SignInPage} redirectURL="/todo" />,
  },
  {
    path: '/signup',
    element: <PublicAuth Component={SignUpPage} redirectURL="/todo" />,
  },
  {
    path: '/todo',
    element: <PrivateAuth Component={TodoPage} redirectURL="/signin" />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
