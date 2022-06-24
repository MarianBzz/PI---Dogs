import { React } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import img from "../../images/iconopi.png";
import patitas from "../../images/patitas.png";

export default function LandingPage() {
  return (
    <div className="full">
      <div className="full-inner">
        <div className="content">
          <img className="logo" src={img} width="150" height="150" alt="logo" />
          <h1 className="title">
            DOGGYDOG'S <br /> APP
          </h1>
          <h3 className="description">Find and Create your own Dog</h3>
          <img
            className="patitas"
            src={patitas}
            width="275"
            height="275"
            alt="patas"
          />
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className="home">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
