import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

function MovieList({ type, title, emoji }) {
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
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${type}&apikey=60233b9b`
      );
      const data = await response.json();

      if (data.Response === "True") {
        const movieDetailsPromises = data.Search.map(async (movie) => {
          const detailResponse = await fetch(
            `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=60233b9b`
          );
          const detailData = await detailResponse.json();

          return {
            title: movie.Title,
            year: movie.Year,
            imdbID: movie.imdbID,
            poster:
              movie.Poster !== "N/A"
                ? movie.Poster
                : "path_to_placeholder_image.png",
            overview: detailData.Plot,
            rating: detailData.imdbRating,
          };
        });

        const moviesWithDetails = await Promise.all(movieDetailsPromises);
        setMovies(moviesWithDetails);
        setfilterMovies(moviesWithDetails);
      } else {
        console.error("No movies found:", data.Error);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleFilter = (rate) => {
    const filtered =
      rate === minRating
        ? movies
        : movies.filter((movie) => parseFloat(movie.rating) >= rate);
    setMinrating(rate);
    setfilterMovies(filtered);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setsort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            name="by"
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
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
