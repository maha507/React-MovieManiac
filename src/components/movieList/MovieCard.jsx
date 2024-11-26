import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const movieCard = ({ movie }) => {
  return (
    <a href="" className="movie_card">
      <img src={movie.Poster} alt="movie poster" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.Title}</h3>
        <div className=" align_center movie_date_rate">
          <p>{movie.Year}</p>
          <p>
            {movie.Type}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{movie.Type}</p>
      </div>
    </a>
  );
};

export default movieCard;
