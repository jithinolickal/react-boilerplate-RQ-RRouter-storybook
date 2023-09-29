import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to="/auth" />;
  }
  return <Outlet />; // Points to 'element' from routes config
};

export default Protected;
