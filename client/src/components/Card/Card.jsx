import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../actions/";
import "./Card.css";

export default function Card({
  image,
  name,
  temperament,
  minweight,
  maxweight,
  minheight,
  maxheight,
  id,
}) {
  const dispatch = useDispatch();
  console.log(name);
  return (
    <div className="rootcard">
      <div className="conteiner">
        <img className="image" src={image} alt="Imagen de la raza"></img>
        <div className="namebreed">
          <Link
            to={`/dogs/${id}`}
            onClick={() => dispatch(getDetail(id))}
            style={{ textDecoration: "none" }}
          >
            <h4>{name}</h4>
          </Link>
        </div>
      </div>
      <div>{temperament}</div>
      <div>
        <h5>
          Weight:{minheight} - {maxheight} cm
        </h5>
      </div>
    </div>
  );
}
