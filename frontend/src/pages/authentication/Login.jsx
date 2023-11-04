import React, { useState } from "react";
import "./Authentication.scss";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () => {};

  return (
    <div className="authentication">
      <div className="logo">buzzz</div>

      <div className="login-register">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
            />
          </Form.Group>

          <button className="submit" onClick={submitHandler}>
            Log In
          </button>
          <br></br>

          {/* <button
            onClick={() => {
              setEmail("guest@gmail.com");
              setPassword("12345678");
            }}
          >
            Get
          </button> */}

          <p>
            Don't have any Account? <Link to="/register">Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
