import React from "react";
import "./movieCard.scss";
import BasicModal from "../movieModal/MovieModal";

interface movieProps {
  title: string;
  image: string;
  description: string;
  vote_average: number;
  release_date: string;
  image2: string;
  genreIds: number[];
  genreArray: { id: number; name: string }[];
}

const MovieCard = ({
  title,
  image,
  description,
  vote_average,
  release_date,
  image2,
  genreIds,
  genreArray,
}: movieProps) => {
  // Check if the image exists and conditionally render the component
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log("genre array in movie card is: ", genreArray);
  if (!image) {
    return null;
  }

  return (
    <div className="card-container">
      <div className="image-container">
        <img
          onClick={handleModal}
          className="image"
          src={`https://image.tmdb.org/t/p/w300/${image}`}
          alt={title} // Updated to avoid offensive content
        />
      </div>
      <div className="details-container">
        <BasicModal
          open={open}
          handleModal={handleModal}
          handleClose={handleClose}
          title={title}
          description={description}
          vote_average={vote_average}
          release_date={release_date}
          image={image}
          image2={image2}
          genreIds={genreIds}
          genreArray={genreArray}
        />

        <p className="movie-details-text">movie title: {title}</p>
        <p className="movie-details-text">rating: {vote_average.toFixed(1)}</p>
        <p className="description">description: {description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
