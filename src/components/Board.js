import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from './Box';

class  Board extends React.Component {

    state = {
        isX : true,        
        squares : Array(9).fill(null)
    }


    handleClick =(idx) =>{
        var {isGameOn} = this.props;
        if(isGameOn ){
            var newSquares = [...this.state.squares] ;          
            newSquares[idx] = this.state.isX ? "X":"O";
            this.setState({
                isX : !this.state.isX ,
                squares:newSquares      
            })
        }
           
    }

    render()
    {
        var {squares} = this.state;   
           
        return (
            <Col md={{span:4, offset:4}}>
              <Row className="justify-content-center mt-4">
                <h5>Jonas's Turn</h5>
                <Col md={12} className="p-4">
                  <Row className="App_board_row">    
                  {
                      squares.map((val,idx)=>{
                        return  <Box value={squares[idx]} click={()=>this.handleClick(idx)} />
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