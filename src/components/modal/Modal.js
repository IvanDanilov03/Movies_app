import classes from "./Modal.module.css";
const Modal = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };
  console.log(props);

  return (
    <div className={classes.modal}>
      <p>{props.overview}</p>
      <div className={classes.buttons}>
        <button className={classes.cancel} onClick={cancelHandler}>
          Cancel
        </button>
        <button className={classes.favorite} onClick={confirmHandler}>
          To Favorite
        </button>
      </div>
    </div>
  );
};

export default Modal;
