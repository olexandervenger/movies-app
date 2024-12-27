import { Button, Card, Typography } from "antd";
import StarFilled from "@ant-design/icons/StarFilled";
import { IMovie } from "../../types/IMovie";
import './styles.css';

export interface IMovieListProps {
  movies: IMovie[];
  onChangeFavoriteMovie: (favoriteId: string) => React.MouseEventHandler<HTMLElement>;
  IsFavoriteMovie: (favoriteId: string) => boolean | undefined;
}

const MovieList: React.FC<IMovieListProps> = (props) => {
  return (
    <main className="movieList" >
      <div className="containerCardMovies" >
        {
          props.movies.map((movie) => {
            const favoriteMovie = props.IsFavoriteMovie(movie.id);
            
            return (
              <Card
                key={movie.id}
                className={`${favoriteMovie && "favoriteCardMovie"} cardMovie`}
                cover={
                  <div className="containerImage">
                    <img src={movie.image} alt={movie.title} />
                  </div>
                }
                actions={[
                  <Button 
                    className={`
                      ${favoriteMovie ? "activeActionStar" : "actionStar"}
                    `}
                    onClick={props.onChangeFavoriteMovie(movie.id)}
                  >
                    <StarFilled />
                  </Button>
                ]}
              >
                <Card.Meta 
                  title={
                    <Typography.Title 
                      className="cardMovieTitle"
                      level={2}
                    >
                      <a href={`https://www.themoviedb.org/movie/${movie.id}`} >
                        {movie.title}
                      </a>
                    </Typography.Title>
                  }
                  description={
                    <article>
                      <Typography.Paragraph>
                        Release: {movie.release_date}
                      </Typography.Paragraph>
                      <Typography.Paragraph>
                        Rating: {movie.vote_average}
                      </Typography.Paragraph>
                      <Typography.Paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis suscipit illo 
                        sunt architecto dolorum, ipsum voluptates officia exercitationem tempore, deserunt 
                        laudantium esse possimus cum. Aliquid obcaecati tenetur ullam quia distinctio 
                        voluptates, corrupti in ipsam repellendus deleniti, quaerat excepturi officia itaque 
                        numquam iste, neque nam laboriosam tempora assumenda odio inventore doloribus!
                      </Typography.Paragraph>
                    </article>
                  }
                />
              </Card>
            )
          })
        }
      </div>
    </main>
  );
};

export default MovieList;