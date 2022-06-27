import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogBreed } from "../../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.length) {
      return alert("fgdgsgg"); //TRAMPAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    }
    dispatch(getDogBreed(name));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar raza..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
}
