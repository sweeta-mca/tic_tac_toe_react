import React from 'react';

function  Box ({value, click}){ 
    
    var placeholder=null;
    if(value === 1)
    {
        placeholder =  "X";
    }
    else if(value === -1){
        placeholder = "O";
    }
          
    return (
        <div onClick={click} className="App_board_col">
            {
                placeholder
            }
        </div>
    );
}

export default Box;