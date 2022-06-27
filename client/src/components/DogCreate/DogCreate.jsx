import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "Name required";
  } else if (parseInt(input.name)) {
    errors.name = "Name is invalid, write a text";
  }
  if (!input.image) {
    errors.image = "image required";
  }
  if (!input.minweight) {
    errors.minweight = "Minimum weight is required";
  } else if (Number(input.minweight) <= 0 || Number(input.minweight) >= 120) {
    errors.minweight = "Write a number beetwen 0 - 120";
  }
  if (!input.maxweight) {
    errors.maxweight = "Maximum weight is required";
  } else if (Number(input.maxweight) <= 0 || Number(input.maxweight) >= 120) {
    errors.maxweight = "Write a number beetwen 0 - 120";
  }
  if (!input.minheight) {
    errors.minheight = "Minimum height is required";
  } else if (Number(input.minheight) <= 0 || Number(input.minheight) >= 100) {
    errors.minheight = "Write a number beetwen 0 - 100";
  }
  if (!input.maxheight) {
    errors.maxheight = "Maximum height is required";
  } else if (Number(input.maxheight) <= 0 || Number(input.maxheight) >= 100) {
    errors.maxheight = "Write a number beetwen 0 - 100";
  }
  if (!input.life_span) {
    errors.life_span = "Life span is required";
  } else if (input.life_span < 1 || input.life_span > 20) {
    errors.life_span = "Write a number beetwen 1 - 20";
  }
  if (!input.temperament) {
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
      setInput({
        ...input,
        temperament: [...input.temperament, e.target.value],
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postDog(input));
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
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>Create your own breed of dog</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            placeholder="Dog name..."
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.name && <p>{errors.name}</p>}</div>
        </div>

        <div>
          <label>Picture:</label>
          <input
            type="url"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.image && <p>{errors.image}</p>}</div>
        </div>

        <div>
          <label>Min weight:</label>
          <input
            type="number"
            min="0"
            placeholder="Minimum weight..."
            value={input.minweight}
            name="minweight"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.minweight && <p>{errors.minweight}</p>}</div>
        </div>

        <div>
          <label>Max weight:</label>
          <input
            type="number"
            min="0"
            placeholder="Maximum weight..."
            value={input.maxweight}
            name="maxweight"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.maxweight && <p>{errors.maxweight}</p>}</div>
        </div>

        <div>
          <label>Min height:</label>
          <input
            type="number"
            min="0"
            placeholder="Minimum height..."
            value={input.minheight}
            name="minheight"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.minheight && <p>{errors.minheight}</p>}</div>
        </div>

        <div>
          <label>Max height:</label>
          <input
            type="number"
            min="0"
            placeholder="Maximum height..."
            value={input.maxheight}
            name="maxheight"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.maxheight && <p>{errors.maxheight}</p>}</div>
        </div>

        <div>
          <label>Life Span</label>
          <input
            type="number"
            min="0"
            placeholder="Dog's life span"
            value={input.life_span}
            name="life_span"
            onChange={(e) => handleChange(e)}
          />
          <div>{errors.life_span && <p>{errors.life_span}</p>}</div>
        </div>

        <div>
          <label>Temperaments:</label>
          <select onChange={(e) => handleSelect(e)}>
            {allTemperament?.map((e, i) => (
              <option value={e.name} key={i}>
                {e.name}
              </option>
            ))}
          </select>
          <div>{errors.temperament && <p>{errors.temperament}</p>}</div>
          <div>
            {input.temperament.map((e, i) => (
              <li key={i}>
                {e}
                <button type="reset" onClick={() => handleDelete(e)}>
                  X
                </button>
              </li>
            ))}
          </div>
        </div>

        <div>
          {console.log(Object.values(errors))}
          <button
            disabled={
              input.temperament.length === 0 &&
              Object.values(errors).every((x) => x !== null || x !== "")
            }
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
