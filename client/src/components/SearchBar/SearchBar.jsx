import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogBreed } from "../../actions";
import "./SearchBar.css";
import logoSearch from "../../images/search.png";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name !== "") dispatch(getDogBreed(name));
    setName(" ");
    if (name === "") return alert("write a dogbreed name");
  }

  return (
    <div className="w">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search Breed..."
          onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="searchButton"
        >
          <img
            src={logoSearch}
            width="26"
            height="26"
            alt="Lupa"
            className="logolupa"
          />
        </button>
      </div>
    </div>
  );
}
