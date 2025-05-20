import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../navs/Navbar"; 

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div
        className="container mt-5"
        style={{
          backgroundColor: "#1C1F2A",
          color: "#F8F9FA",
          minHeight: "100vh", 
          paddingBottom: "50px",
        }}
      >
        <div
          className="jumbotron text-center p-5 rounded"
          style={{ backgroundColor: "#3A506B", color: "#F8F9FA" }}
        >
          <h1 className="display-7">Bienvenido al Blog</h1>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-6 mb-4">
            <div
              className="card shadow-sm"
              style={{ backgroundColor: "#F8F9FA", borderColor: "#CED4DA" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#3A506B" }}>
                  Publicaciones
                </h5>
                <p className="card-text mb-4" style={{ color: "#1C1F2A" }}>
                  Aquí se mostrarán todas las publicaciones en las cuales codras hacer uno o varios comentaros.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card shadow-sm"
              style={{ backgroundColor: "#F8F9FA", borderColor: "#CED4DA" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#3A506B" }}>
                  Publicaciones y Comentarios
                </h5>
                <p className="card-text mb-5" style={{ color: "#1C1F2A" }}>
                  Aquí se mostrarán los comentario que se han echo en las publicaciones.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-md-6">
            <div
              className="card shadow-sm"
              style={{ backgroundColor: "#F8F9FA", borderColor: "#CED4DA" }}
            >
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#3A506B" }}>
                  Filtraciones
                </h5>
                <p className="card-text mb-5" style={{ color: "#1C1F2A" }}>
                  Aquí se podras filtrar las publicaciones por el curso que busques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5"></div>
    </>
  );
};

export default HomePage;