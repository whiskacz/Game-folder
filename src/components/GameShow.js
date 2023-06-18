import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function GameShow({ game }) {

    let content = <h3>{game.title}</h3>


    return (
    <div className="game-show">
        <img src={`https://picsum.photos/seed/${game.id}/300/200`} alt="game screen" />
        <FontAwesomeIcon icon="fa-solid fa-x" />
        <h3>{content}</h3>
    </div>
)}

export default GameShow