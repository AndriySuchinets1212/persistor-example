import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/button";
import { TextField } from "../../components/text-field";
import { loginAction } from "../../redux/auth/actions";

import "./styles.css";

const SignIn = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginAction({
      username,
      password
    }))
    
  }

  return (
    <div className="container">
      <div className="form-wrapper">
          <h1 className="title">Welcome to Sign in</h1>
          <div className="form">
            <TextField 
              value={username}
              setValue={(e) => setUserName(e)}
              label="Username"
            />
            <TextField 
              value={password}
              setValue={(e) => setPassword(e)}
              label="Password"
            />
            <Button onClick={loginHandler}/>
          </div>
      </div>
    </div>
  )
}

export default SignIn;