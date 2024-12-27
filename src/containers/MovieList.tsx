import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { addTopFavoriteMovie, deleteTopFavoriteMovie } from "../store/actions/movies";
import { RootState } from "../store/reducers";
import { IMovie } from "../types/IMovie";

const MovieListContainer: React.FC = () => {

  const dispatch = useDispatch();

  const movies: IMovie[] = useSelector((state: RootState) => state.movies.movies);
  const favoriteMovies: string | null = useSelector((state: RootState) => state.movies.favoriteMovies);

  const onChangeFavoriteMovie = (favoriteId: string) => () => {
    if(!favoriteMovies?.includes(favoriteId)) {
      return dispatch(addTopFavoriteMovie(favoriteId));
    }

    dispatch(deleteTopFavoriteMovie(favoriteId))
  } 

  const IsFavoriteMovie = (favoriteId: string) => {
    return favoriteMovies?.includes(favoriteId);
  }

  return <MovieList 
    movies={movies}
    onChangeFavoriteMovie={onChangeFavoriteMovie}
    IsFavoriteMovie={IsFavoriteMovie}
  />;
};

export default MovieListContainer;