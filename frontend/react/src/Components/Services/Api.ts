import { MovieType } from "../../types/MovieType";

export const fetchMovies = async (): Promise<MovieType[]> => {
    try {
        const response = await fetch ('http://localhost:3001/movies');
        
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }

        const movies: MovieType[] = await response.json();
        return movies;
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro na busca de filmes:', error.message);
          throw error;
        } else {
          console.error('Erro desconhecido na busca de filmes');
          throw new Error('Erro desconhecido');
        }
 }
}