import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./movieCard";
import Fire from "../../assets/fire.png";

function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?s=batman&apikey=60233b9b"
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </h2>
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>
          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Asending</option>
            <option value="">Desending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
