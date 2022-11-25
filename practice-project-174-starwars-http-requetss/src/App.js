import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [swapiMoviesList, setSwapiMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);

  const fetchMovieHandler = useCallback(async () => {
    setErrorFlag(false);
    setIsLoading(true);

    try {
      const fetchMovies = await fetch("https://swapi.dev/api/films/");

      if (!fetchMovies.ok) {
        throw 'Something went wrong!!';
      }
      const response = await fetchMovies.json();
      const swapiMoviesArray = response.results;
      const swapiMovies = swapiMoviesArray.map(movie => { return { id: movie.episode_id, title: movie.title, openingText: movie.opening_crawl, releaseDate: movie.release_date } })
      setSwapiMoviesList(swapiMovies);
      setIsLoading(false);
    }
    catch (error) {
      setErrorFlag(true);
      setIsLoading(false);
      console.log(error);
    }

  }, []);

  useEffect(() => {
    fetchMovieHandler();
    return () => { }; //clean up function of useEffect
  }, [fetchMovieHandler]);

  let content = "";
  if (!isLoading && errorFlag) {
    content = <p>Something went wrong</p>
  }

  if (isLoading) { content = <p>Fetching movies for you...</p> }
  if (!isLoading && !errorFlag) {
    if (swapiMoviesList.length > 0) {
      content = <MoviesList movies={swapiMoviesList} />
    }
    else {
      content = <p>Nothing to display...</p>
    }
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
