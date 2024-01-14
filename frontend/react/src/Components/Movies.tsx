import { useEffect, useState } from 'react';
import { fetchMovies } from "./Services/Api";
import { MovieType } from '../types/MovieType';
import './movies.css'

function Movies() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error: unknown) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <img className="img" src={movie.image} alt={movie.title} key={movie.id}
            />
        ))}
      </ul>
    </div>
  );
}

export default Movies;
