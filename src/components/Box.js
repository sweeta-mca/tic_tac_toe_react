import React from 'react';

function  Box ({value, click}){           
    return (
        <div onClick={click} className="App_board_col">
            {value}
        </div>
    );
}

export default Box;