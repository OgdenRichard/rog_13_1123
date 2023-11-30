import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Root } from '../layouts/Root';
import { Home } from '../pages/Home';
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import '../style/App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="signin" element={<SignIn />} />
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
