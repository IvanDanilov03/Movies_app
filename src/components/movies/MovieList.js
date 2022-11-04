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
      <div className={classes.navig}>
        <button
          className={classes.prev}
          onClick={() => {
            props.setPageNumber((oldPageNumber) => Math.max(oldPageNumber - 1, 1));
          }}
        >
          Previous
        </button>
        <span>{props.pageNumber}</span>
        <button
          className={classes.next}
          onClick={() => {
            props.setPageNumber((oldPageNumber) => oldPageNumber + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
