import React from "react";
import "./modalContent.scss";
import { release } from "os";
import Genres from "../genres/Genres";


interface modalContentProps {
  title: string;
  description: string;
  vote_average: number;
  release_date: string;
  image: string;
  image2: string;
  movieGenres: {id:number, name:string}[];
}

const ModalContent = ({
  title,
  description,
  vote_average,
  release_date,
  image,
  image2,
  movieGenres,
}: modalContentProps) => {
  const formatString = (release_date: string) => {
    const [year, month, day] = release_date.split("-");
    return `${day}.${month}.${year}`;
  };
  return (
    <div className="modal-content-container">
      <div className="left-container">
        <div className="img-container">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w300/${image2 ? image2 : image}`}
          />
        </div>
      </div>

      <div className="right-container">
        <p className="title">{title}</p>
       <Genres movieGenres={movieGenres}/>
        <p className="description">{description}</p>
        <p className="release-date">
          release date: {formatString(release_date)}
        </p>
        <p className="rating">rating: {vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default ModalContent;
