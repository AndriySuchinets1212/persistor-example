import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  children,
}) => {
  const { user_data } = useSelector(state => state.auth)
  return user_data.username ? children : <Navigate to="/sign-in" />;
};
export default PrivateRoute;