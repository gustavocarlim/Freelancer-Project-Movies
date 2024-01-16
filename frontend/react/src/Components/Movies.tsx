import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from "./Services/Api";
import { MovieType } from '../types/MovieType';
import '../styles/movies.css'
import Header from './Header';

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
      <Header/>
      <ul>
        {movies.map(movie => (
          <Link to={`/movies/${movie.id}`}>
          <img className="img" src={movie.image} alt={movie.title} key={movie.id}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
