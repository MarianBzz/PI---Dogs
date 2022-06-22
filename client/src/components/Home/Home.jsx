import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //utilizo hooks en vez de hacer mapstatetoprops

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  return (
    <div>
      <Link to="/dogs">
        {" "}
        <h2>Agregar Raza</h2>
      </Link>
      <h1>API DOGS JUJU</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Cargar dogs nuevamente
      </button>
      <div>
        <span>Filter by weight</span>
        <select>
          <option value="asc">Lightest</option>
          <option value="desc">Heaviest</option>
        </select>

        <span> Filter by order </span>
        <select>
          <option value="alf">A-Z</option>
        </select>

        <span> Filter by breed</span>
        <select>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="existing">Existing</option>
        </select>

        <span> Filter by Temperament</span>
        <select>
          <option>All</option>
          <option>{}</option>
        </select>

        {allDogs?.map((e) => (
          <Card
            name={e.name}
            image={e.image}
            temperament={e.temperament}
            minweight={e.minweight}
            minheight={e.minheight}
            maxweight={e.maxweight}
            maxheight={e.maxheight}
          />
        ))}
      </div>
    </div>
  );
}
