import React, { useState } from "react";
import { useFiltrar } from "../shared/hooks/useFiltrar";
import { Navbar } from "./navs/Navbar";

const Filtrar = () => {
  const [curso, setCurso] = useState("");
  const [hasSearched, setHasSearched] = useState(false); 
  const { publications, loading, error, filtrarPorCurso, setPublications } = useFiltrar();

  const handleSearch = (e) => {
    e.preventDefault();
    setHasSearched(true); 
    if (curso.trim() !== "") {
      filtrarPorCurso(curso);
    } else {
      setPublications([]); 
    }
  };

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
          className="jumbotron text-center p-5 rounded mb-5"
          style={{
            backgroundColor: "#3A506B",
            color: "#F8F9FA", 
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
                backgroundColor: "#F8F9FA",
                borderColor: "#CED4DA", 
                color: "#1C1F2A", 
              }}
            />
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#CBA135", 
                color: "#F8F9FA", 
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
                    backgroundColor: "#F8F9FA",
                    borderColor: "#CED4DA", 
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