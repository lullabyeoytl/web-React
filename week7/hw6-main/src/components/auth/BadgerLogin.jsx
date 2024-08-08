import React, { useRef ,useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router';
import BadgerLoginStatusContext from '../contexts/BadgerLoginStatusContext.js';

const BadgerLogin = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);

  const handleLogin = async (e) => {
    e.preventDefault(); // 阻止表单提交的默认行为

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert("You must provide both a username and password!");
      return;
    }

    try {
      const response = await fetch('https://cs571.org/api/s24/hw6/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          "X-CS571-ID": CS571.getBadgerId(),
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 401) {
        alert("Incorrect username or password!");
      } else if (response.ok) {
        alert("Login was successful!");
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
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default BadgerLogin;
