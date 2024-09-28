import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalContent from "./ModalContent";
import "./movieModal.scss";
const style = {
  position: "absolute" as "absolute",
  borderRadius: "8px",
  backgroundColor: "grey",
  display: "flex",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface modalProps {
  open: boolean; // Boolean to control the visibility of the modal
  handleModal: () => void; // Function to handle opening the modal
  handleClose: () => void;
  title: string;
  description: string;
  vote_average: number;
  release_date: string;
  image: string;
  image2: string;
  genreIds: number[];
  genreArray: { id: number; name: string }[];
}
export default function BasicModal({
  open,
  handleModal,
  handleClose,
  title,
  description,
  vote_average,
  release_date,
  image,
  image2,
  genreIds,
  genreArray,
}: modalProps) {
  // s
//   const movieGenres = genreArray
//     .filter((genre) => genreIds.includes(genre.id))
//     .map((genre) => genre);
//   console.log("movie genres in modal is: ", movieGenres);
const movieGenres = [{id:1, name:'comedy'}, {id:2, name:'romance'}, {id:3, name:'action'}, {id:4, name:'adventure'}, {id:5, name:'horror'}]
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-content-container">
          <ModalContent
            title={title}
            description={description}
            vote_average={vote_average}
            release_date={release_date}
            image={image}
            image2={image2}
            movieGenres={movieGenres}

          />
        </div>
      </Modal>
    </div>
  );
}
