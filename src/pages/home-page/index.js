import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/auth/actions";

import "./styles.css"

const Home = () => {
  const {user_data} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(loginAction({}));
  }
  return (
    <div className="home-wrapper">
      <div className="header-container">
        <button className="logout-button" onClick={logOut}>
          <p className="logout-text">Logout</p>
        </button>
      </div>
      <div className="wrapper">
        <h1 className="title-welcome">Welcome back <span className="name-text">{user_data.username}</span></h1>
      </div>
    </div>
  )
}

export default Home;