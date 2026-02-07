import styles from './GameCard.module.css';

interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;

}

interface props {
    game: Game

}

const GameCard = ({game}: props) => {
    return (

        <div className={styles.card}>
            <img src={game.background_image} alt={game.name} className={styles.image} />
            <div className={styles.cardBody}>
                <div className={styles.headingContainer}>
                    <h3 className={styles.title}>{game.name}</h3>
                    <span className={styles.score}>{game.metacritic}</span>
                </div>
            </div>
        </div>

    );
};

export default GameCard;