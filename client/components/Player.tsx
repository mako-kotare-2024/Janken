// Sends request to the database for the correct player images.
import PlayerSelect from "../../game"

// TODO: THIS IS TIM'S MINUTE UNDERSTANDING ON THE STATE SYSTEM. OVERHAUL AND IMPROVE PLEASE!!!
export default function PlayerState(states) {
    <img src="/images/alex.png" alt="Player readying move" />
    if (PlayerSelect === 1) {
        return (
            <img src="/images/alex-rock.png" alt="Player selected rock" />
        )
    } else if (PlayerSelect === 2) {
        return (
            <img src="/images/alex-paper.png" alt="Player selected paper" />
        )
    } else if (PlayerSelect === 3) {
        <img src="/images/alex-scissors.png" alt="Player selected Scissors" />
    }
}