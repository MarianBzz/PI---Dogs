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
    <div>
      <div>
        <Link
          to={`/dogs/${id}`}
          onClick={() => dispatch(getDetail(id))}
          style={{ textDecoration: "none" }}
        >
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <img
          className="image"
          src={image}
          alt="Imagen de la raza"
          width="200px"
          height="250px"
        ></img>
      </div>
      <div>Temperament: {temperament}</div>
      <div>
        <h5>
          Min Height:{minweight} kg - Max Height:{maxweight} kg
        </h5>
        <h5>
          Min Weight:{minheight} cm - Max Weight:{maxheight} cm
        </h5>
      </div>
    </div>
  );
}
