import React from 'react';
import {Col,Form,Button} from 'react-bootstrap';


var arr = ['player1','player2'];
function getFormData(formData){
        arr.reduce((acc,key) =>{
            acc[key] = formData.get(key)
            return acc;
        },[]);
        return arr;
}

function Info({updateState,isGameOn}){

    function handleSubmit(e){
        e.preventDefault()
        var formData = new FormData(e.target)
        getFormData(formData)
        // TODO: Here I need to set that game is on
        updateState(true)
    }

    return (
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
              <h3>Player Information</h3>  
              <Form.Group className="mb-3">
                <Form.Label>Player 1 Name:</Form.Label>
                <Form.Control name="player1" type="text" placeholder="Enter Player1 Name"/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Player 2 Name:</Form.Label>
                <Form.Control name="player2" type="text" placeholder="Enter Player2 Name"/>
              </Form.Group>
              
              <Button variant="primary" type="submit" disabled={isGameOn}>
                Start The Game
            </Button>
          </Form>          
        </Col>
    );
}

export default Info;