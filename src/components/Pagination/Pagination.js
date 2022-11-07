import classes from "./Pagination.module.css";

const Pagination = (props) => {
  return (
    <div className={classes.navig}>
      <button
        className={classes.prev}
        onClick={() => {
          props.setPageNumber((oldPageNumber) =>
            Math.max(oldPageNumber - 1, 1)
          );
        }}
      >
        Previous
      </button>
      <span className={classes.page_number}>{props.pageNumber}</span>
      <button
        className={classes.next}
        onClick={() => {
          props.setPageNumber((oldPageNumber) => oldPageNumber + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
