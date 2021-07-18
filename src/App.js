import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container >
      <Row className="justify-content-center mt-4">
        <h1>Tic Tac Toe</h1>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Form>
              <h3>Player Information</h3>  
              <Form.Group className="mb-3">
                <Form.Label>Player 1 Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Player1 Name"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Player 2 Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Player2 Name"/>
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Start The Game
            </Button>
          </Form>          
        </Col>
        <Col md={{span:4, offset:4}}>
          <Row className="justify-content-center mt-4">
            <h5>Jonas's Turn</h5>
            <Col md={12} className="p-4 App_board">
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col> 
              </Row>
              <Row className="App_board_row">
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
          <h4>Winner is John</h4>
      </Row>
    </Container>
  );
}

export default App;
