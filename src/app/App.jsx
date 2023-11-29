import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Root } from '../layouts/Root';
import { Home } from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';
import '../style/App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<User />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
