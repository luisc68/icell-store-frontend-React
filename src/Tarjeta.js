import React from "react";
import "./tarjeta.css";


export default function Tarjeta({ nombre, precio, marca, category, description, imagen, agregarAlCarrito }) {
  return (
    <div className="productosContainer">
    <div className="cardContainer">
      <div className="imagenWrapper">
        <img src={imagen} className="imagen" alt="img" />
      </div>
      <div className="contentWrapper">
        <h1 className="titulo">{nombre}</h1>
        <h4 className="subtitulo">
          ${precio} • {marca}
        </h4>
        <hr />
        <h5 className="descripcion">Category:</h5>
        <p className="descripciontxt">{category}</p>
        <h5 className="descripcion">Descripcion item:</h5>
        <p className="descripciontxt">{description}</p>
        <button className="addcart" onClick={agregarAlCarrito}>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
    </div>
  );
}

