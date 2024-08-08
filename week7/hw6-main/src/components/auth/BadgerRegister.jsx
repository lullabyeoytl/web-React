import React, { useContext,useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import BadgerLoginStatusContext from '../contexts/BadgerLoginStatusContext';

const BadgerRegister = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);

  const handleRegister = async (e) => {
    e.preventDefault(); // 阻止表单提交的默认行为

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!username || !password) {
      alert("You must provide both a username and password!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Your passwords do not match!");
      return;
    }

    // 添加密码强度验证
    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }

    try {
      const response = await fetch('https://cs571.org/api/s24/hw6/register', {
        method: 'POST',
        credentials: 'include',
        headers: {
          "X-CS571-ID": CS571.getBadgerId(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 409) {
        alert("That username has already been taken!");
      } else if (response.ok) {
        alert("Registration was successful!");
        setLoginStatus(true);
        sessionStorage.setItem('loginStatus', {loginStatus});
        navigate('/');
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            ref={usernameRef}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            ref={confirmPasswordRef}
          />
        </Form.Group>
        <br />
        <Button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default BadgerRegister;
