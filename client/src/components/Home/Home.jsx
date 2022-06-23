import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, filterCrated, filterByAlphabet } from "../../actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //utilizo hooks en vez de hacer mapstatetoprops
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(filterByAlphabet(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterCreated(e) {
    dispatch(filterCrated(e.target.value));
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
        <select onChange={(e) => handleSort(e)}>
          <option value="alf-az">A-Z</option>
          <option value="alf-za">Z-A</option>
        </select>

        <span> Filter by origin</span>
        <select onChange={(e) => handleFilterCreated(e)}>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>

        <span> Filter by Temperament</span>
        <select>
          <option>All</option>
          {/* {temperament.map((temp, index) => (
            <option>{temp.name}</option>
          ))} */}
        </select>

        <Paginado
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          paginado={paginado}
        />

        {currentDogs?.map((e) => (
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
