import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

export function DogCreate() {
  const dispatch = useDispatch();
  const temperament = useSelector((state) => state.temperament);

  const [input, setInput] = useState({
    name: "",
    life_span: "",
    minweight: "",
    maxweight: "",
    minheight: "",
    maxheight: "",
    image: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperamentList());
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>Create your own breed of dog</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={input.name} name="name" />
        </div>
      </form>
    </div>
  );
}
