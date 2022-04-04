import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home-page";
import SignIn from "../pages/sign-in";
import PrivateRoute from "./privateRoute";

function Strip() {
  const {user_data} = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route
        path="/home"
        element={
          user_data.username ? (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ) : (
            <Navigate to="/sign-in" />
          )
        }
      />
    </Routes>
  );
}

export default Strip;