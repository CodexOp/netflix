import React from "react";
import "./Apps.css";
import Row from "./Row";
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function Apps() {
  return (
    <>
      <div className="App">
        <Nav />
        <Banner />
        <Row
          isLargeRow
          Title="NETFLIX ORIGNALS"
          fetchUrl={requests.fetchNetflixOrignals}
        />
        <Row Title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row Title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row Title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row Title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row Title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row Title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row Title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
      </div>
    </>
  );
}

export default Apps;
