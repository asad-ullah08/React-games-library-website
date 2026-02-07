import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import type { Genre } from "../interfaces";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];

}

const GenreList = ({onSelectGenre}: Props) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [, setError] = useState("");

    useEffect (() => {

        apiClient.get<FetchGenreResponse>('/genres')
        .then(res => setGenres(res.data.results))
        .catch(err =>setError(err.message));

    }, []);

    return (

        <ul>
            {genres.map((genre) => (
                <li key={genre.id}>
                <button onClick={() => onSelectGenre(genre)}
                    >
                    {genre.name}
                </button>
                </li>

            ))}

        </ul>

    );
};

export default GenreList;