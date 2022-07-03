import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../actions/";
import "./Card.css";
import imgload from "../../images/loadindog.gif";

export default function Card({
  image,
  name,
  temperament,
  minweight,
  maxweight,
  minheight,
  maxheight,
  createInDb,
  id,
}) {
  const dispatch = useDispatch();
  return (
    <div className="rootcard">
      <div className="conteiner">
        <div className="imgcont">
          <Link
            to={`/dogs/${id}`}
            onClick={() => dispatch(getDetail(id))}
            style={{ textDecoration: "none" }}
          >
            <img
              className="image"
              src={
                image ? (
                  image
                ) : (
                  <div className="gifload">
                    <img src={imgload} alt="gif dog" />
                  </div>
                )
              }
              alt="Imagen de la raza"
            ></img>
          </Link>
        </div>
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
          Weight: {minweight} - {maxweight} Kg
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
