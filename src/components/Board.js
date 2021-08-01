import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from './Box';
import validateForResult from './board.util';

const INIT_STATE = {
  isX : true,      
  squares : Array(9).fill(null)
}

class  Board extends React.Component {
    state = INIT_STATE

    handleClick =(idx) =>{
        var {isGameOn,change,updateState} = this.props;
        change()
        if(isGameOn && !this.state.squares[idx])
        {
            var newSquares = [...this.state.squares] ;          
            newSquares[idx] = this.state.isX ? 1:-1;
            var result = validateForResult(newSquares);
            this.setState({
                isX : !this.state.isX ,                
                squares:newSquares      
            })
            if(!result.isGameOn)
            {
              setTimeout(() =>this.setState(INIT_STATE) , 1000);
              updateState(false,result.isDraw,result.winner);
            }
        }
    }

    render()
    {      
        var {squares} = this.state;
        var {player,isGameOn} = this.props;                
        return (
            <Col md={{span:4, offset:4}}>
              <Row className="justify-content-center mt-4">
                {(player && isGameOn)&& <h5>{player}'s Turn</h5>}
                <Col md={12} className="p-4 col-md App_board">
                  <Row className="App_board_row">    
                  {
                      squares.map((val,idx)=>{
                        return  <Box key= {idx} value={squares[idx]} click={()=>this.handleClick(idx)} />
                      })
                  }
                  </Row>
                </Col>
              </Row>
            </Col> 
        );
    }    
}
export default Board;