import React, { useState, useEffect, useCallback } from "react";
import Filter from "../components/filters/Filter";
import Loader from "../components/Loader/Loader";

import MovieList from "../components/movies/MovieList";
import classes from "./AllFilms.module.css";

const AllFilms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovies, setLoadedMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [httpError, setHttpError] = useState();

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setHttpError();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=f3eef95590ec19675b93041058a9b5d2&page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      setLoadedMovies(responseData.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHttpError(error.message);
    }
  }, [pageNumber]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  if (isLoading) {
    return <Loader />;
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  return (
    <section className={classes.all_films}>
      <Filter />
      <MovieList
        key={Math.random()}
        movies={loadedMovies}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </section>
  );
};

export default AllFilms;
