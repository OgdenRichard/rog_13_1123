import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Root } from './layouts/Root';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} />),
);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
