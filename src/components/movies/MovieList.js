import Pagination from "../Pagination/Pagination";
import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";

const MovieList = (props) => {

  return (
    <div className={classes.right_all}>
      <ul className={classes.all}>
        <div className={classes.right}>
          {props.movies.map((movies) => (
            <MovieItem
              key={movies.id}
              id={movies.id}
              poster_path={movies.poster_path}
              title={movies.title}
              release_date={movies.release_date}
              overview={movies.overview}
              vote_average={movies.vote_average}
            />
          ))}
        </div>
      </ul>
      <Pagination pageNumber={props.pageNumber} setPageNumber={props.setPageNumber}/>
    </div>
  );
};

export default MovieList;
