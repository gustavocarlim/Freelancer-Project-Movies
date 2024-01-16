import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from "./Services/Api";
import { MovieType } from '../types/MovieType';
import '../styles/moviePage.css'
import Header from './Header';

function MoviePage () {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieType | null>(null);

    useEffect(() => {
      const fetchMovieData = async () => {
        try {
          const moviesData = await fetchMovies();
          const selectedMovie = moviesData.find((m) => m.id.toString() === id);

          if (selectedMovie) {
            setMovie(selectedMovie);
          } else {
            console.error('Filme não encontrado');
          }
        } catch (error: unknown) {
          console.error('Erro ao buscar filmes:', error);
        }
      };
  
      fetchMovieData();
    }, [id]);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
        <div>
        <Header/>
        <div className='title'>
        <img className="img-page"src={movie.image} alt={movie.title} />
        <div >{movie.title}</div>
        <div>{movie.genre}</div>
        <div>{movie.description}</div>
        <div>{movie.type}</div>
        <div>{movie.created_at}</div>
      </div>
      </div>
    );
}

export default MoviePage;