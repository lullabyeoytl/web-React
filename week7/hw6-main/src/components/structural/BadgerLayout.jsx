import React, { useState,useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import crest from '../../assets/uw-crest.svg'
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext";

function BadgerLayout(props) {

    // TODO @ Step 6:
    // You'll probably want to see if there is an existing
    // user in sessionStorage first. If so, that should
    // be your initial loginStatus state.
    const [loginStatus, setLoginStatus] = useState(()=>{
        const storedLoginStatus = sessionStorage.getItem("loginStatus");
        return storedLoginStatus ? JSON.parse(storedLoginStatus) : false;
    });

    useEffect(() => {
        sessionStorage.setItem("loginStatus", JSON.stringify(loginStatus));
    }, [loginStatus]);

    const [chatrooms, setChatrooms] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/api/s24/hw6/chatrooms', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
            }
        }).then(res => res.json()).then(json => {
            setChatrooms(json)
        })
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="BadgerChat Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        BadgerChat
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {loginStatus ? (<Nav.Link as={Link} to="logout">Logout</Nav.Link>)
                        :<>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                        </>}
                        <NavDropdown title="Chatrooms">
                            {
                                /* TODO Display a NavDropdown.Item for each chatroom that sends the user to that chatroom! */
                                chatrooms.map((room,index) => <NavDropdown.Item as={Link} to={`chatrooms/${room}`} key= {index}>{room}</NavDropdown.Item>)
                            }
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <BadgerLoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
                    <Outlet />
                </BadgerLoginStatusContext.Provider>
            </div>
        </div>
    );
}

export default BadgerLayout;