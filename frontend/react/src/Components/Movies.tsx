import { useEffect, useState } from 'react';
import { fetchMovies } from "./Services/Api";

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
      <h1>Lista de Filmes</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
