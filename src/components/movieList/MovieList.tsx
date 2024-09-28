import React from "react";
import MovieCard from "../movieCard/MovieCard";
import { movieDTO } from "../../interfaces/movieDTO";
import "./movieList.scss";
interface movieArrayProps {
  movieArray: movieDTO[];
  genreArray: { id: number; name: string }[];
}
const MovieList = ({ movieArray, genreArray }: movieArrayProps) => {
  return (
    <div className="movie-list-container">
      {movieArray.map((movie) =>
        movie.overview?.trim() !== "" ? (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            vote_average={movie.vote_average}
            description={movie.overview}
            release_date={movie.release_date}
            image2={movie.backdrop_path}
            genreIds={movie.genre_ids}
            genreArray={genreArray}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default MovieList;
