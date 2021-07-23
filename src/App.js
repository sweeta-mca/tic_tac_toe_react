import React from "react";
import {Container, Row } from "react-bootstrap";
import './App.css';
import Board from "./components/Board";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Info from "./components/Info";

class  App extends React.Component {

    state ={
      isGameOn:false
    }

    updateState = (flag)=>{
      this.setState({
        isGameOn : flag
      })
    }

    render()
    {
      return (
        <Container >
          <Header ></Header>
          <Row className="mt-4">
            <Info updateState={this.updateState} isGameOn = {this.state.isGameOn}></Info>
            <Board isGameOn = {this.state.isGameOn}></Board>            
          </Row>
          <Row className=" mt-4">
            <Feedback></Feedback>
          </Row>
        </Container>
      );
    }
}

export default App;