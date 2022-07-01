import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, setCleartDetail } from "../../actions";
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
    return () => {
      dispatch(setCleartDetail());
    };
  }, [dispatch]);

  return (
    <div className="app">
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
          <h1 className="breedname">{detailDog.name}</h1>
          <div className="infodetail">
            <p className="md">
              <strong>Temperament</strong>
              <br />
              {detailDog.temperament}
            </p>
            <p>
              {" "}
              <strong>Minimum Weight </strong>
              <br />
              {detailDog.minweight}
            </p>
            <p>
              <strong>Maximum Weight</strong> <br /> {detailDog.maxweight}
            </p>
            <p>
              {" "}
              <strong> Minimum Height </strong> <br />
              {detailDog.minheight}
            </p>
            <p>
              <strong>Maximum Height </strong>
              <br /> {detailDog.maxheight}
            </p>
            <p>
              <strong>Life Span</strong> <br /> {detailDog.life_span}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
