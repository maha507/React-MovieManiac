import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/tada.png";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import SingleMovie from "./components/movieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList type="top_rated" title="Top Rated" emoji={Star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={Party} />
            }
          />
          <Route path="/title/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
