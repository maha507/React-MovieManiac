import React from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
function MovieList() {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji"></img>
        </h2>
        <div className="movie_list_fs">
          <ul className="movie_filer">
            <li className="movie_filter_item">8+ Star</li>
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
    </section>
  );
}

export default MovieList;
