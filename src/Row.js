import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const baseUrL = "https://image.tmdb.org/t/p/original/";

const Row = ({ Title, fetchUrl, isLargeRow }) => {
  const [trailerURL, setURL] = useState();
  const [movies, setMovies] = useState([]);
  // A snippet runs on tbased of specific condoition
  useEffect(() => {
    //if [] run once and don run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const clicked = (movie) => {
    if (trailerURL) {
      setURL("");
    } else {
      movieTrailer(movie?.name || `${movie.name}`)
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setURL(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{Title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          //
          <img
            key={movie.id}
            onClick={() => clicked(movie)}
            className={`poster ${isLargeRow && "poster_large"}`}
            src={`${baseUrL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
