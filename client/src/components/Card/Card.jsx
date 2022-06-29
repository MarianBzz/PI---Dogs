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
            <h4 className="namebreed">{name}</h4>
          </Link>
        </div>
      </div>
      <div className="temperament">{temperament}</div>
      <div>
        <h5 className="weight">
          Weight: {minheight} - {maxheight} Lb
        </h5>
        <Link
          to={`/dogs/${id}`}
          onClick={() => dispatch(getDetail(id))}
          style={{ textDecoration: "none" }}
        >
          <button className="btnfilter">More Info</button>
        </Link>
      </div>
    </div>
  );
}
