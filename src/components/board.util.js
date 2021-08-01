function validateForResult(squares)
{
    var isGameOn = true;
    var isDraw =false;
    var winner = null;
    
    if((squares[0]+squares[1]+squares[2]) === 3 || (squares[3]+squares[4]+squares[5]) === 3 || (squares[6]+squares[7]+squares[8]) === 3 ||
       (squares[0]+squares[3]+squares[6]) === 3 || (squares[1]+squares[4]+squares[7]) === 3 || (squares[2]+squares[5]+squares[8]) === 3  ||
       (squares[0]+squares[4]+squares[8]) === 3 || (squares[2]+squares[4]+squares[6]) === 3)
    {
        // winner by row
        isGameOn = false;
        winner = "X";    
    }
    else if((squares[0]+squares[1]+squares[2]) === -3 || (squares[3]+squares[4]+squares[5]) === -3 || (squares[6]+squares[7]+squares[8]) === -3 ||
    (squares[0]+squares[3]+squares[6]) === -3 || (squares[1]+squares[4]+squares[7]) === -3 || (squares[2]+squares[5]+squares[8]) === -3  ||
    (squares[0]+squares[4]+squares[8]) === -3 || (squares[2]+squares[4]+squares[6]) === -3)
    {
        // winner by row
        isGameOn = false;
        winner = "O";    
    }
    else
    {
         var filledBoxes = squares.filter((val)=> val === null);
         if(filledBoxes.length===0){
             isDraw= true;
             isGameOn =false;
         }
    }

    return {
        isGameOn,
        isDraw,
        winner
    };

}

export default validateForResult;