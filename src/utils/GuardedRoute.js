import { Navigate } from "react-router-dom";

export const GuardedRoute = ({ children, guard }) => {
  if (!guard) {
    return <Navigate to="/" />;
  }
  return children;
};