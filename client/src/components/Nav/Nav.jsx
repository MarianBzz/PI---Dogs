import { Link } from "react-router-dom";
import icon from "../../images/iconopi.png";
import "./Nav.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav({ handleClick, allDogs }) {
  return (
    <div className="root">
      <Link to="/home" style={{ textDecoration: "none" }}>
        <div className="icontittle">
          <img src={icon} alt="Icon Doggy" width="75" height="75" />
          <h3>DoggyDog's App</h3>
        </div>
      </Link>
      {allDogs ? (
        <div className="botones">
          <SearchBar />
          <button
            className="btn2"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Reload Dogs
          </button>
          <Link to="/create" style={{ textDecoration: "none" }}>
            <button className="button_top">Create Breed</button>
          </Link>
        </div>
      ) : (
        <Link to="/home" style={{ textDecoration: "none" }}>
          <button className="buttonback">Back Home</button>
        </Link>
      )}
    </div>
  );
}
