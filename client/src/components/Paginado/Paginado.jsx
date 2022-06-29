import React from "react";
import "./Paginado.css";

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <nav>
      <ul className="paginado">
        {pageNumber?.map((number) => (
          <li className="number" key={number}>
            <button
              className="pagin"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                paginado(number);
              }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
