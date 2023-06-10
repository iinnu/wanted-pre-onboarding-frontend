import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello world</div>,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/todo',
    element: <TodoPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
