import GameShow from './GameShow'
    

function GameList ( { games }) {

    const renederedGames = games.map((game) => {
        return <GameShow key={game.id} game={game} />
    })

    return ( 
    <div className='games-list'>
        <div>{renederedGames}</div>
    </div>
)}
export default GameList