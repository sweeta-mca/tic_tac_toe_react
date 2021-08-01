import React from "react";
import {Container, Row } from "react-bootstrap";
import './App.css';
import Board from "./components/Board";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Info from "./components/Info";

class  App extends React.Component {
    state ={
      isGameOn:false,
      isDraw : false,
      winner:null,
      player1:null,
      player2:null,
      turn : null     
    }

    handleChange = () => {
      var {turn} = this.state
      this.setState({
        turn: turn ===1?2:1
      })
    }

    updateState = (flag,isDraw,winner,playerInfo) => {
      if(flag) {
        // player starting the game
        var randomValue = Math.floor(Math.random() * 2)+1;
        
        this.setState({
          isGameOn : flag,    
          ...playerInfo,
          turn : randomValue
        })
      }
      else{
        var won;
        if(winner)
        {
          won = this.state.turn === 1 ? this.state.player1 : this.state.player2
        }
        else
        {
          won = this.state.winner
        }
        this.setState({
          isGameOn : flag,    
          isDraw : isDraw?isDraw : this.state.isDraw,
          winner: won      
        }) 
      }
      
    }
    
    render()
    {
      var {isDraw,isGameOn,winner,turn,player1,player2} = this.state;
      var chance;
      if(turn === 1)
      {
        chance = player1
      }else{
        chance =player2
      }
      return (
        <Container>
          <Header></Header>
          <Row className="mt-4">
            <Info  updateState ={this.updateState} isGameOn = {isGameOn} winner={winner} isDraw={isDraw}></Info>
            <Board change ={this.handleChange} isGameOn = {isGameOn} updateState={this.updateState} player ={chance}></Board>            
          </Row>
          <Row className="justify-content-center mt-4">
            <Feedback isDraw={isDraw} isGameOn={isGameOn} winner={winner}></Feedback>
          </Row>
        </Container>
      );
    }
  }
export default App;