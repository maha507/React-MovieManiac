import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const movieCard = ({ movie, overview, rating }) => {
  return (
    <a
      href={`https://www.imdb.com/title/${movie.imdbID}`}
      target="_blank"
      className="movie_card"
    >
      <img src={movie.poster} alt="movie poster" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className=" align_center movie_date_rate">
          <p>{movie.year}</p>
          <p>
            <p>{rating ? rating : "Rating not available"}</p>
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{overview.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
};

export default movieCard;
