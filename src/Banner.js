import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import "./banner.css";
const baseUrL = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movies);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <Ban>
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              "${baseUrL}${movies?.backdrop_path}"
          )`,
          }}
        >
          <div className="banner_content">
            <h1 className="banner_title">
              {movies?.Title || movies?.name || movies?.orignal_name}
            </h1>
            <div className="button">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="desc">{truncate(movies?.overview, 150)}</h1>
          </div>
          <div className="banner_fadeBottom" />
        </header>
      </Ban>
    </>
  );
};
export default Banner;
// Media Query
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smtablet: "740px",
  mobiles: "450px",
});
const Ban = styled.div`
  .banner_title {
    ${customMedia.lessThan("mobiles")`
    font-size: 2.5em;
    font-weight: 800;
    padding-bottom: 0.3rem;
  `}
  }
`;
