import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const movieCard = (movie) => {
  return (
    <a href="" className="movie_card">
      console.log(movie.Title);
      <img src={movie.Poster} alt="movie poster" className="movie_poster" />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.Title}</h3>
        <div className=" align_center movie_date_rate">
          <p>{movie.year}</p>
          <p>
            {movie.rate_average}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{movie.type}</p>
      </div>
    </a>
  );
};

export default movieCard;
