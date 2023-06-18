import GameList from './components/GameList';
import GameCreate from './components/GameCreate';
import { useState } from 'react';


function App(){
   const[games, setGames] = useState([])

   const createGame = (title) => {
      const updateGame = [
         ...games,
         { id: Math.round(Math.random()*9999), title}
      ];
      setGames(updateGame)
   }

  


   return (
   <div>
    <GameList games={games} />
    <GameCreate onCreate={createGame}/>
   </div> 
   
   
)}

export default App