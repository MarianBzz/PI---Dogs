import React from "react";

export default function Card({
  image,
  name,
  temperament,
  minweight,
  maxweight,
  minheight,
  maxheight,
}) {
  return (
    <div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <img
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
