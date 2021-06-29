import React, {useState, useEffect, useContext} from 'react';
import BoardGame from './boardGame/BoardGame';
import GameOver from './gameOver/gameOver';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory } from "react-router-dom";

export const Game = () => {
  let history = useHistory();
  const [board, setBoard] = useState([]);
  const [copy, setCopy] = useState([]);
  const [invalidAttempts, setInvalidAttempts] = useState(0);
  const [totalShootCount, setTotalShootCount] = useState(0)
  const [gameOver, setGameOver] = useState(false);
  const size = 10;
  const { level, addPlay } = useContext(GlobalContext);
  
  const handleCellClick = (cell) => {
    if (cell.isSelected) {
      return;
    }
    let selectedItem =  cell ;
    selectedItem.isSelected = true;
    board[cell.coordinates.x][cell.coordinates.y] = selectedItem;
    setBoard(board)
    let dato = totalShootCount
    if (cell.isShip === true) {
      dato = dato + 1
      setTotalShootCount(dato);
      if (totalShootCount === 20) {
        setGameOver(true)
      }
    } 
    let k = invalidAttempts + 1
    setInvalidAttempts(k)
    if (invalidAttempts === level.value) {
      setGameOver(true)
    }
  }

  const SetEmptyBoard = () => {
    for (let x = 0; x < size; x++) {
      copy.push([]);
      for (let y = 0; y < size; y++) {
        copy[x].push({
          isSelected: false,
          isShip: false,
          coordinates: {
            x: x,
            y: y
          }
        });
      }
    }
    setBoard(copy);
    SetAllShips();
  }

  const SetIsShip = (iniH, iniV, finH, finV) => {
    if(IsValidPoint(iniH, iniV, finH, finV)===false)
    {
      for(let i=iniH; i<=finH; i++)
      {
        for(let j=iniV; j<=finV; j++)
        {
          copy[i][j].isShip=true;
        }
      }
      return true;
    }
    return false;
  }

  const IsValidPoint = (iniH, iniV, finH, finV) => {
		if(finH > 9 || finV > 9)
			return true;
		iniH = iniH > 0 ? iniH-1:iniH;
		iniV = iniV > 0 ? iniV-1:iniV;
		finH = finH < 9 ? finH+1:finH;
		finV = finV < 9 ? finV+1:finV;
		for(let i=iniH; i<=finH; i++)
		{
			for(let j=iniV; j<=finV; j++)
			{
				if(copy[i][j].isShip===true)
				{
					return true;
				}
			}
		}
		return false;
	}

  const SetAllShips = () => {
    var iniH=0, iniV=0, finH=0, finV=0;
    let ships = [[1,4], [2,3], [3,2], [4,1]];
    for(let i=0; i<ships.length; i++)
    {
      for(let j=0; j<ships[i][0]; j++)
      {
        iniH = Math.floor(Math.random()*10);
        iniV = Math.floor(Math.random()*10);
        if(ships[i][1] === 1)
        {
          if(SetIsShip(iniH, iniV, iniH, iniV)===false)
          {
            j--;
          }
        }else{
          let direction = Math.floor(Math.random()*2);
          if(direction === 0)
          {
            finH = iniH+ships[i][1]-1;
            finV = iniV;
          }else if(direction === 1) {
            finH=iniH;
            finV=iniV+ships[i][1]-1;
          }
          if(SetIsShip(iniH, iniV, finH, finV)===false)
          {
            j--;
          }
        }
      }
    }
    setCopy(copy)
    setBoard(copy)
  }

  const onSaveGame = () => {
    addPlay({level, pts:totalShootCount, name: 'Joel'});
    setGameOver(false);
    history.push("/history-plays");
  }
  const playAgain = () => {
    setGameOver(false);
    history.push("/");
  }
  
  useEffect(() => {
    SetEmptyBoard();
  }, [])
  return (
    <>
      <div className="heading">
        <h1>Battleship</h1>
      </div>
      <div className="game-board">
        <BoardGame
          board={board}
          onCellClick={(cell) =>
            handleCellClick(cell)
          }
        />
      </div>
      {gameOver && (
          <GameOver
            totalShootCount={totalShootCount}
            onSaveGame={() =>
              onSaveGame()
            }
            playAgain={() =>
              playAgain()
            }
          />
        )}
    </>
  )
}
export default Game;