import React, { useEffect, useState,useContext, useRef } from "react";
import { Container, Row, Col,  Pagination,Form ,Button} from "react-bootstrap";
import BadgerMessage from "./BadgerMessage";
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext";

export default function BadgerChatroom(props) {
  const [messages, setMessages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);
  const MessageTitle = useRef(null);
  const MessageContent = useRef(null);

  function handleMessagePost() {
    if(!MessageContent.current.value || !MessageTitle.current.value){
      alert("Please enter both title and content");
      return;
    }
    fetch(`https://cs571.org/api/s24/hw6//messages?chatroom=${props.name}`, {
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        title: MessageTitle.current.value,
        content: MessageContent.current.value,
      })
    }).then((res) => res.json())
   .then((json) => {
      setMessages([...messages, json.message]);
    })
  };

  const loadMessages = () => {
    fetch(
      `https://cs571.org/api/s24/hw6/messages?chatroom=${props.name}`,
      {
        headers: {
          "X-CS571-ID": CS571.getBadgerId(),
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        setMessages(json.messages);
      });
  };

  // Why can't we just say []?
  // The BadgerChatroom doesn't unload/reload when switching
  // chatrooms, only its props change! Try it yourself.
  useEffect(loadMessages, [props]);

  const buildPagination = () => {
    let pages = [];
    const num_pages = 4;
    for (let i = 1; i <= num_pages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={activePage === i}
          onClick = {() => setActivePage(i)}
          >{i}</Pagination.Item>
      )
    }

    return pages;
  }
  const page_cards_num = messages.length /4 ;

  return (
    <>
      <h1>{props.name} Chatroom</h1>
      {/* TODO: Allow an authenticated user to create a post. */
        loginStatus?(
          <Form onSubmit={handleMessagePost}>
            <Form.Group controlId="MessageTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" ref={MessageTitle} />
            </Form.Group>
            <br/>
            <Form.Group controlId="MessageContent">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows="3" ref={MessageContent} />  
            </Form.Group>
            <Button type = "submit">Post</Button>
          </Form>
        ):(<></>)
      }
      <hr />
      {messages.length > 0 ? (
        <Container fluid>
          <Row>
            {
              /* TODO: Complete displaying of messages. */
                    
                messages.slice(page_cards_num*(activePage-1), page_cards_num*activePage).map((message, index) => {
                return (
                  <Col key={index} xs={12} md={6} lg={4}>
                    <BadgerMessage {...message}/>
                  </Col>
                );
              })
            

            }
          </Row>
            <Pagination>
              {buildPagination()}
            </Pagination>
        </Container>
        
     
      ) : (
        <>
          <p>There are no messages on this page yet!</p>
        </>
      )}
    </>
  );

}
