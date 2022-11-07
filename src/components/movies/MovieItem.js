import Card from "../ui/Card";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";
import { useState } from "react";
import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt={props.title}
          />
        </div>

        <div className={classes.content}>
          <h3 className={classes.title}>{props.title}</h3>
          <p className={classes.date}>Rating: {props.vote_average}</p>
          <p className={classes.date}>Release date: {props.release_date}</p>
        </div>

        <div className={classes.buttons}>
          <button className={classes.description} onClick={deleteHandler}>
            Description
          </button>
          <button className={classes.favorite}>To Favorites</button>
        </div>
      </Card>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} overview={props.overview}/>
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </li>
  );
};

export default MovieItem;
