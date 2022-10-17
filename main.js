let turn = 'X';

let title = document.querySelector('.title')
let squares = [];


function winnner(){
    for(let i = 1 ; i <10 ; i++)
    {
        squares[i] = document.getElementById('item' + i);
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        title.innerHTML = 'winner';

        document.getElementById('item' + 1);
        document.getElementById('item' + 2);  
        document.getElementById('item' + 3);

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
        

    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {

    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
    {
        
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '')
    {
        
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
    {
        
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
        
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
    {
        
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')
    {
        
    }
}


function game (id)
{
    let e = document.getElementById(id);
    if (turn === 'X' && e.innerHTML == '')
    {
        e.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    }
    else if(turn === 'O' && e.innerHTML == '')
    {
        e.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winnner();
}