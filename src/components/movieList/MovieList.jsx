import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./movieCard";
import Fire from "../../assets/fire.png";
import FilterGroup from "../FilterGroup";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setfilterMovies] = useState([]);
  const [minRating, setMinrating] = useState(0);
  const [sort, setsort] = useState({
    by: "default",
    order: "asc",
  });
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setfilterMovies(sortedMovies);
    }
  }, [sort]);

  const fetchMovies = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?s=batman&apikey=60233b9b"
    );
    const data = await response.json();

    if (data.Response === "True") {
      // Fetch detailed data for each movie
      const movieDetailsPromises = data.Search.map(async (movie) => {
        const detailResponse = await fetch(
          `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=60233b9b`
        );
        const detailData = await detailResponse.json();

        return {
          title: movie.Title,
          year: movie.Year,
          imdbID: movie.imdbID,
          poster: movie.Poster,
          overview: detailData.Plot, // Overview
          rating: detailData.imdbRating, // Rating
        };
      });

      // Wait for all movie details to be fetched
      const moviesWithDetails = await Promise.all(movieDetailsPromises);

      setMovies(moviesWithDetails);
      setfilterMovies(moviesWithDetails); // Update the state with detailed movies
    } else {
      console.error("Error fetching movies:", data.Error);
    }
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinrating(0);
      setfilterMovies(movies);
    } else {
      setMinrating(minRating);

      const filtered = movies.filter((movie) => {
        const movieRating = parseFloat(movie.rating); // Ensure it's a number
        return movieRating >= rate;
      });
      setfilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">Sort By</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Asending</option>
            <option value="desc">Desending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            overview={movie.overview}
            rating={movie.rating}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
