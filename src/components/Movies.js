import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slices/WatchlistSlice";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hovered, setHovered] = useState("");

  const dispatcher = useDispatch();
  const watchlist = useSelector((state) => state.watchlist);

  const trendingMoviesData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=d1119def7a84c4713547568e1a2d2617&page=${pageNumber}`
      )
      .then((response) => {
        setMoviesData(response.data.results);
      });
  };

  useEffect(() => {
    trendingMoviesData();
  }, [pageNumber]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const addToWatchlist = (movie) => {
    dispatcher(addToWishlist(movie));
  };

  const removeFromWatchlist = (movie) => {
    dispatcher(removeFromWishlist(movie));
  };

  const showAddIcon = (movie) => {
    return <button onClick={() => addToWatchlist(movie)}> + </button>;
  };

  const showRemoveIcon = (movie) => {
    return <button onClick={() => removeFromWatchlist(movie)}> x </button>;
  };

  const isAddedToWatchlist = (movieId) => {
    return watchlist.some((movie) => {
      return movie.id === movieId;
    });
  };

  const showButton = (movieId) => {
    setHovered(movieId);
  };

  const removeButton = () => {
    setHovered("");
  };

  const getMovieCard = (movie) => {
    return (
      <div
        key={movie.id}
        className="w-[130px] h-[30vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[145px] relative rounded-xl hover:scale-110 duration-300 flex items-end"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
        }}
        onMouseOver={() => showButton(movie.id)}
        onMouseLeave={removeButton}
      >
        <div
          className="text-2xl p-2 bg-gray-300 rounded-xl absolute top-2 right-2"
          style={{
            display: hovered === movie.id ? "block" : "none",
          }}
        >
          {isAddedToWatchlist(movie.id)
            ? showRemoveIcon(movie)
            : showAddIcon(movie)}
        </div>

        <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
          {movie.original_title}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="text-center m-10 text-2xl font-bold">Trending Movies</div>

      <div className="flex flex-wrap">
        {moviesData.map((movie) => {
          return getMovieCard(movie);
        })}
      </div>

      <Pagination
        pageNumberProp={pageNumber}
        onNext={nextPage}
        onPrevious={previousPage}
      />
    </div>
  );
};

export default Movies;
