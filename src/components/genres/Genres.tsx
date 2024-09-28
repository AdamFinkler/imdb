import React from "react";
import "./genres.scss";

interface GenresProps {
  movieGenres: { id: number; name: string }[];
}
const Genres = ({ movieGenres }: GenresProps) => {
  return (
    <div className="genres-container">
      {movieGenres.map((genre) => (
        <p className="genre" key={genre.id}>
          {genre.name}
        </p>
      ))}
    </div>
  );
};

export default Genres;
