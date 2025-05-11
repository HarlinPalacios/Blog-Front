import React, { useState } from "react";
import { useFiltrar } from "../shared/hooks/useFiltrar";
import { Navbar } from "./navs/Navbar";

const Filtrar = () => {
  const [curso, setCurso] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // Nuevo estado para controlar si se ha buscado
  const { publications, loading, error, filtrarPorCurso, setPublications } = useFiltrar();

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true); // Marca que se ha realizado una búsqueda
    if (curso.trim() !== "") {
      filtrarPorCurso(curso);
    } else {
      setPublications([]); // Limpia los resultados si el campo está vacío
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="container mt-5"
        style={{
          backgroundColor: "#1C1F2A", // Fondo principal
          color: "#F8F9FA", // Texto claro
          minHeight: "100vh", // Asegura que el fondo cubra toda la pantalla
          paddingBottom: "50px",
        }}
      >
        <div
          className="jumbotron text-center p-5 rounded mb-5"
          style={{
            backgroundColor: "#3A506B", // Fondo del encabezado
            color: "#F8F9FA", // Texto claro
          }}
        >
          <h1 className="display-7">Filtrar Publicaciones</h1>
        </div>

        <form onSubmit={handleSearch} className="d-flex mb-5 justify-content-center">
          <div className="w-50 d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Escribe el nombre del curso"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              style={{
                backgroundColor: "#F8F9FA", // Fondo claro
                borderColor: "#CED4DA", // Bordes grises
                color: "#1C1F2A", // Texto oscuro
              }}
            />
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#CBA135", // Fondo del botón
                color: "#F8F9FA", // Texto claro
              }}
            >
              Filtrar
            </button>
          </div>
        </form>

        {loading && <p className="text-center">Cargando publicaciones...</p>}
        {error && (
          <p className="text-danger text-center" style={{ color: "#6C1D45" }}>
            {error}
            <br />
            <small>Intenta buscar otro curso.</small>
          </p>
        )}

        {!loading && !error && publications.length > 0 && (
          <div className="row">
            {publications.map((publication) => (
              <div key={publication._id} className="col-md-4 mb-4">
                <div
                  className="card shadow-sm h-100"
                  style={{
                    backgroundColor: "#F8F9FA", // Fondo de la tarjeta
                    borderColor: "#CED4DA", // Bordes grises
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#3A506B" }}>
                      {publication.title}
                    </h5>
                    <p className="card-text" style={{ color: "#1C1F2A" }}>
                      {publication.description}
                    </p>
                    <p className="text-muted">
                      <small>
                        <strong>Creado el:</strong>{" "}
                        {new Date(publication.creationdate).toLocaleString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && hasSearched && publications.length === 0 && (
          <p className="text-center text-danger" style={{ color: "#6C1D45" }}>
            No se encontraron publicaciones para el curso "{curso}".
          </p>
        )}
      </div>
    </>
  );
};

export default Filtrar;