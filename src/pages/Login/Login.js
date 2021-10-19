import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    logInUsingGoogle,
    logInUsingGithub,
    handleUserLoginWithEmail,
    error,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    handleUserLoginWithEmail(email, password);
  };
  window.scroll(0, 0);
  return (
    <div className="login-main-Container">
      <Form
        onSubmit={handleLoginWithEmail}
        className="form-container mx-auto mt-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={handleEmail}
            className="loginInput border-top-0 border-end-0 border-start-0 rounded-0"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
          <Form.Control
            onBlur={handlePassword}
            className="loginInput border-top-0  border-end-0 border-start-0 rounded-0"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button className="loginBtn mt-4" variant="info" type="submit">
          Log in
        </Button>
      </Form>
      <div>
        <h3 className="orStyle text-center">-----------or-----------</h3>
        <div className="text-center mt-4">
          <Button
            onClick={logInUsingGoogle}
            className="bg-primary border-0 me-4"
          >
            Google login
          </Button>
          <Button onClick={logInUsingGithub} className="bg-dark border-0 ms-4">
            Github login
          </Button>
          <p className="text-danger my-3"> {error}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
