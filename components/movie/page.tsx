/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

export const AllMovies = () => {
  const [movies, setMovies] = useState<any>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  const handleWatchNow = (movie: any) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const url = "https://imdb-top-100-movies1.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d34d355b10mshf21fee342708d40p1909d2jsn23ea77d42b7a",
      "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    //fetch api
    fetch(url, options)
      .then((res) => res.json())
      .then((movie) => {
        setMovies(movie);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="container movie-section text-white w-100 my-3 w-100">
        {/* loop through all movies */}
        {movies.length > 0 &&
          movies?.map((movie: any) => (
            <div className="movie m-2" key={movie.id}>
              <div>
                <img src={movie.images[2][1]} alt="Image" />
              </div>
              <div className="movie-info">
                <h3 className="fw-bold">{movie.title}</h3>
                <div className="d-flex flex-column justify-content-start align-items-start gap-1">
                  <span className="orange fw-bold">{movie.genre[0]}</span>
                  <span className="green"> Released {movie.year}</span>
                </div>
              </div>
              <div className="overview">
                <h4>{movie.title}</h4>
                <div className="mb-2">
                  {/* Map genres */}
                  {movie.genre.map((genre: any) => (
                    <span className="mbr-3 green" key={genre.id}>
                      {genre}{" "}
                    </span>
                  ))}
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center">
                  <button
                    className="btn btn-warning w-100 fw-bold"
                    onClick={() => handleWatchNow(movie)}
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          content: {
            width: "850px",
            height: "85vh",
            margin: "auto", // Center the modal horizontally
            padding: "0px",
            border: "none",
            overflow: "hidden",
          },
        }}
      >
        {selectedMovie && (
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=COv52Qyctws&ab_channel=RedChilliesEntertainment"
            }
            height="85vh"
            width="850px"
            controls={true}
            className="bg-dark overflow-hidden"
          />
        )}
      </Modal>
    </div>
  );
};
