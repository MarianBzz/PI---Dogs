import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import { useParams } from "react-router";
import imgload from "../../images/loadindog.gif";
import "./Detail.css";
import Nav from "../Nav/Nav";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailDog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div>
      <Nav />
      {!detailDog.name ? (
        <div className="gifload">
          <img src={imgload} alt="gif dog" />
        </div>
      ) : (
        <div className="rootdetail">
          <div className="imagedetail">
            <img className="imgdetail" src={detailDog.image} alt="Dog image" />
          </div>
          <div className="infodetail">
            <h1>Name of breed: {detailDog.name}</h1>
            <p>Temperamet: {detailDog.temperament}</p>
            <p>Minimum Weight: {detailDog.minweight}</p>
            <p>Maximum Weight: {detailDog.maxweight}</p>
            <p>Minimum Height: {detailDog.minheight}</p>
            <p>Maximum Height: {detailDog.maxheight}</p>
            <p>Life Span: {detailDog.life_span}</p>
          </div>
        </div>
      )}
    </div>
  );
}
