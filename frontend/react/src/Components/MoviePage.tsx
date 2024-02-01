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
      <div className='teste'>
        <img className="img-page"src={movie.image} alt={movie.title} /> 
        <div className='painel'>
           <div className='title' >{movie.title} / {movie.created_at}</div>
           <div className='description'>{movie.description}</div>
           <div className='genre'>{movie.genre}/{movie.type}</div>
           <div className="star-rating">
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
              <input type="radio" name='star'/>
         </div>
        </div>
      </div>
     </div>
    );
}

export default MoviePage;