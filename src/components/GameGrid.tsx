import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard"; // Ensure you have GameCard.tsx created
import './GameGrid.css'
import type { Game, Genre } from "../interfaces";

interface Props {
  SelectedGenre: Genre | null;

}

// 1. Define what a 'Game' looks like based on the RAWG API JSON
/*interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}*/

// 2. Define the shape of the API response
interface FetchGamesResponse {
  results: Game[];
}

const GameGrid = ({ SelectedGenre }: Props) => {
  // 3. State to store our games and errors
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const fetchNextPage = () => {
    const nextPage = page + 1;
    apiClient
    .get<FetchGamesResponse>("/games", { 
      params: {
        page: nextPage,
        genres: SelectedGenre?.id 
        }})
    .then((res) => {
      setGames([...games, ...res.data.results]);
      setPage(nextPage);
    });
  };

  // 4. Fetch the data when the component loads
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: {
          genres: SelectedGenre?.id
        }
      })
      .then((res) => {
        setGames(res.data.results);
        setPage(1);
       }) // Extract 'results' array from JSON
        .catch((err) => setError(err.message));
  }, [SelectedGenre]);

  return (
    <>
    <div className="game-grid-container">
      {error && <p className="error">{error}</p>}
      
      {/* 5. Map each game object to a GameCard component */}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>

    <button onClick={fetchNextPage} className="load-more-btn">
      Load More
    </button>
    </>
  );
};

export default GameGrid;