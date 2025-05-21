import React from "react";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <img
      className="nav-logo"
      src="./public/navega..png"
      alt="Logo y nombre almacenadora"
      style={{
        width: "80px",
        height: "50px",
        marginBottom: "1rem",
        marginTop: "0.5rem",
        marginRight: "40px",
        borderRadius: "60px",
      }}
    />
  );
};

export const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top d-flex justify-content-center align-items-center px-4"
      style={{
        backgroundColor: "#1C1F2A",
        color: "#F8F9FA",
      }}
    >
      <NavLogo />

      <div className="d-flex gap-2">
        <Link
          to="/"
          className="btn"
          style={{
            backgroundColor: "#3A506B", 
            color: "#F8F9FA", 
            width: "120px",
            height: "40px",
          }}
        >
          Inicio
        </Link>
        <Link
          to="/publications"
          className="btn"
          style={{
            backgroundColor: "#3A506B", 
            color: "#F8F9FA", 
            width: "120px",
            height: "40px",
          }}
        >
          Publicaciones
        </Link>
        <Link
          to="/publication"
          className="btn"
          style={{
            backgroundColor: "#3A506B", 
            color: "#F8F9FA", 
            width: "120px",
            height: "40px",
          }}
        >
          Comentarios
        </Link>
        <Link
          to="/filtrar"
          className="btn"
          style={{
            backgroundColor: "#3A506B", 
            color: "#F8F9FA", 
            width: "120px",
            height: "40px",
          }}
        >
          Filtraciones
        </Link>
      </div>
    </nav>
  );
};
