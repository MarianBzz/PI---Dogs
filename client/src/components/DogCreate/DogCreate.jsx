import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import "./DogCreate.css";

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Name required";
  } else if (parseInt(input.name)) {
    errors.name = "Name is invalid, write a text";
  } else if (!input.image) {
    errors.image = "Image required";
  } else if (!input.minweight) {
    errors.minweight = "Minimum weight is required";
  } else if (Number(input.minweight) <= 0 || Number(input.minweight) >= 120) {
    errors.minweight = "Write a number beetwen 0 - 120";
  } else if (!input.maxweight) {
    errors.maxweight = "Maximum weight is required";
  } else if (Number(input.maxweight) <= 0 || Number(input.maxweight) >= 120) {
    errors.maxweight = "Write a number beetwen 0 - 120";
  } else if (!input.minheight) {
    errors.minheight = "Minimum height is required";
  } else if (Number(input.minheight) <= 0 || Number(input.minheight) >= 100) {
    errors.minheight = "Write a number beetwen 0 - 100";
  } else if (!input.maxheight) {
    errors.maxheight = "Maximum height is required";
  } else if (Number(input.maxheight) <= 0 || Number(input.maxheight) >= 100) {
    errors.maxheight = "Write a number beetwen 0 - 100";
  } else if (!input.life_span) {
    errors.life_span = "Life span is required";
  } else if (input.life_span < 1 || input.life_span > 20) {
    errors.life_span = "Write a number beetwen 1 - 20";
  } else if (!input.temperament) {
    errors.temperament = "At least one temperament is required";
  }
  return errors;
}

export function DogCreate() {
  const dispatch = useDispatch();
  const allTemperament = useSelector((state) => state.temperaments);
  const history = useHistory();
  const [errors, setErrors] = useState("");
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

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (input.temperament.includes(e.target.value)) {
      alert("Already in the list");
    } else {
      if (input.temperament.length < 7) {
        setInput({
          ...input,
          temperament: [...input.temperament, e.target.value],
        });
      } else {
        alert("7 temperaments max");
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postDog(input));
    alert("Success! Your dog was created");
    setInput({
      name: "",
      life_span: "",
      minweight: "",
      maxweight: "",
      minheight: "",
      maxheight: "",
      image: "",
      temperament: [],
    });

    history.push("/home");
  }

  function handleDelete(e) {
    setInput({
      ...input,
      temperament: input.temperament.filter((el) => el !== e),
    });
  }

  useEffect(() => {
    dispatch(getTemperamentList());
  }, [dispatch]);

  return (
    <div className="rootcreate">
      <Nav />
      <div className="imageandform">
        <div className="rootform">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="tittleform">Create your own breed of dog</h1>
            <button
              className="btncreate"
              disabled={
                input.temperament.length === 0 ||
                Object.values(errors).length > 0 ||
                input.name === ""
              }
              type="submit"
              value="crear"
            >
              Create
            </button>
            {Object.values(errors).length > 0 && (
              <p className="errorms">(All inputs must be completed)</p>
            )}
            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  placeholder="Dog name..."
                  type="text"
                  value={input.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.name && <p className="errorms">{errors.name}</p>}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="url"
                  value={input.image}
                  name="image"
                  onChange={(e) => handleChange(e)}
                  placeholder="Url"
                />
              </div>
              <div>
                {errors.image && <p className="errorms">{errors.image}</p>}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="number"
                  min="0"
                  placeholder="Minimum weight..."
                  value={input.minweight}
                  name="minweight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.minweight && (
                  <p className="errorms">{errors.minweight}</p>
                )}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="number"
                  min="0"
                  placeholder="Maximum weight..."
                  value={input.maxweight}
                  name="maxweight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.maxweight && (
                  <p className="errorms">{errors.maxweight}</p>
                )}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="number"
                  min="0"
                  placeholder="Minimum height..."
                  value={input.minheight}
                  name="minheight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.minheight && (
                  <p className="errorms">{errors.minheight}</p>
                )}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="number"
                  min="0"
                  placeholder="Maximum height..."
                  value={input.maxheight}
                  name="maxheight"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.maxheight && (
                  <p className="errorms">{errors.maxheight}</p>
                )}
              </div>
            </div>

            <div className="error">
              <div className="abc">
                <input
                  className="inputform"
                  type="number"
                  min="0"
                  placeholder="Dog's life span"
                  value={input.life_span}
                  name="life_span"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                {errors.life_span && (
                  <p className="errorms">{errors.life_span}</p>
                )}
              </div>
            </div>

            <div className="error">
              <div className="templimit">
                <label className="titletemp">Select temperaments:</label>
                <select className="pop" onChange={(e) => handleSelect(e)}>
                  {allTemperament?.map((e, i) => (
                    <option
                      value={e.name}
                      key={i}
                      onChange={(e) => handleChange(e)}
                    >
                      {e.name}
                    </option>
                  ))}
                </select>
                <div>
                  {errors.temperament && (
                    <p className="errorms">{errors.temperament}</p>
                  )}
                </div>
                <div>
                  {input.temperament.map((e, i) => (
                    <li className="listatemp" key={i}>
                      {e}
                      <button
                        className="x"
                        type="reset"
                        onClick={() => handleDelete(e)}
                      >
                        X
                      </button>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
