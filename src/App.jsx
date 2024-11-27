import React from "react";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/tada.png";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />
      </main>
    </div>
  );
};

export default App;
