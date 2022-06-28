import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import {
  getDogs,
  filterCrated,
  filterByAlphabet,
  getTemperamentList,
  filterByTemperament,
  orderByWeight,
} from "../../actions";
import Nav from "../Nav/Nav";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs); //utilizo hooks en vez de hacer mapstatetoprops
  const allTemperaments = useSelector((state) => state.temperaments);
  const [orden, setOrden] = useState("");
  const [temperament, setTemperament] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const [weight, setWeight] = useState(1);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperamentList());
    dispatch(filterByTemperament());
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs());
    setTemperament("All");
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(filterByAlphabet(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSelect(e) {
    e.preventDefault();
    dispatch(filterByTemperament(e.target.value));
    setTemperament(e.target.value);
    setCurrentPage(1);
  }

  function handleSortByWeight(e) {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setWeight(e.target.value);
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    dispatch(filterCrated(e.target.value));
  }

  return (
    <div>
      <Nav handleClick={handleClick} allDogs={allDogs} />
      <div className="roothome">
        <div className="left">
          <div className="filtros">
            <div className="filtertemperament">
              <span> Filter by Temperament</span>
              <select onChange={(e) => handleSelect(e)}>
                <option value="All"> All </option>
                {allTemperaments.map((temp) => (
                  <option
                    onClick={(e) => {
                      handleClick(e);
                    }}
                  >
                    {temp.name}
                  </option>
                ))}
              </select>
            </div>

            <span>Filter by weight</span>
            <div className="filterweight">
              <button
                className="btnfilter"
                onClick={(e) => handleSortByWeight(e)}
                value="asc"
              >
                Lightest
              </button>
              <button
                className="btnfilter"
                onClick={(e) => handleSortByWeight(e)}
                value="desc"
              >
                Heaviest
              </button>
            </div>

            <span> Filter by order </span>
            <div className="filterorder">
              <button
                className="btnfilter"
                onClick={(e) => handleSort(e)}
                value="alf-az"
              >
                A-Z
              </button>
              <button
                className="btnfilter"
                onClick={(e) => handleSort(e)}
                value="alf-za"
              >
                Z-A
              </button>
            </div>

            <span> Filter by origin</span>
            <div className="filterorigin">
              <button
                className="btnfilter"
                onClick={(e) => handleFilterCreated(e)}
                value="all"
              >
                All
              </button>
              <button
                className="btnfilter"
                onClick={(e) => handleFilterCreated(e)}
                value="created"
              >
                Created
              </button>
              <button
                className="btnfilter"
                onClick={(e) => handleFilterCreated(e)}
                value="api"
              >
                Api
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="cards">
            {currentDogs?.map((e, i) => (
              <Card
                name={e.name}
                image={e.image}
                temperament={
                  e.createInDb
                    ? e.temperaments.map((t) => t.name)
                    : e.temperament
                }
                minweight={e.minweight}
                minheight={e.minheight}
                maxweight={e.maxweight}
                maxheight={e.maxheight}
                id={e.id}
                key={i}
              />
            ))}
          </div>
          <Paginado
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            paginado={paginado}
          />
        </div>
      </div>
    </div>
  );
}
