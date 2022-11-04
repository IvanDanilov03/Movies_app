import classes from "./Filter.module.css";
import Card from "../ui/Card";

const Filter = () => {
  return (
    <div className={classes.filter}>
      <Card>
        <div>
          <h1>FIlters</h1>
          <h3>Genres</h3>

        </div>
      </Card>
    </div>
  );
};

export default Filter;
