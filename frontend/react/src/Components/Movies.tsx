import { useEffect, useState } from 'react';
import { fetchMovies } from "./Services/Api";
import { MovieType } from '../types/MovieType';
import './movies.css'

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error.message);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <div>
      <h1>Estrelar</h1>
      <ul>
        {movies.map(movie => (
            <img className="img" src={movie.image} alt={movie.title} />
        ))}
      </ul>
    </div>
  );
}

export default Movies;
