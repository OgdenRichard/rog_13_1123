import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const userConnected = useSelector((state) => state.login.isLoggedIn);

  if (!userConnected) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
