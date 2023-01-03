import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../App.jsx";

export function RequireAuth({ children }) {
  let { userAuth } = useContext(AuthContext);

  return userAuth === true ? children : <Navigate to="/" />;
}
