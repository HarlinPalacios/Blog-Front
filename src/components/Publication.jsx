import React, { useState } from "react";
import { usePublicationsList } from "../shared/hooks/usePublication";
import AddComment from "./Comments";
import { Navbar } from "./navs/Navbar";
 
export const PublicationList = () => {
  const { publications, loading, error } = usePublicationsList();
  const [selectedPublication, setSelectedPublication] = useState(null);
 
  const handleAddComment = (publicationId) => {
    setSelectedPublication(publicationId);
  };
 
  const handleCommentAdded = () => {
    setSelectedPublication(null);
  };
 
  const closeModal = () => {
    setSelectedPublication(null);
  };
 
  return (
    <>
      <Navbar />
      <div
        className="container-fluid mt-5"
        style={{
          backgroundColor: "#F0F0F0",
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
          <h1 className="display-7">Publicaciones</h1>
        </div>
 
        {loading ? (
          <p className="text-center">Cargando publicaciones...</p>
        ) : error ? (
          <p className="text-danger text-center" style={{ color: "#6C1D45" }}>
            {error}
          </p>
        ) : (
          <div className="row d-flex justify-content-center">
            {publications
              .slice()
              .sort(
                (a, b) => new Date(b.creationdate) - new Date(a.creationdate)
              )
              .map((publication) => (
                <div key={publication._id} className="col-md-8 mb-4 ">
                  <div
                    className="card shadow-sm"
                    style={{
                      backgroundColor: "#D6C6B1",
                      borderColor: "#CED4DA",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#3A506B", padding: "1px"}}>
                        {publication.title}
                      </h5>
                      <p className="card-text" style={{ color: "#1C1F2A" }}>
                        {publication.description}
                      </p>
                      <p className="card-text" style={{ color: "#1C1F2A" }}>
                        <strong>Curso:</strong>{" "}
                        {publication.curso?.name || "No especificado"}
                      </p>
                      <p className="text-muted">
                        <small>
                          <strong>Creado el:</strong>{" "}
                          {new Date(
                            publication.creationdate
                          ).toLocaleString()}
                        </small>
                      </p>
                      <button
                        className="btn mt-3"
                        onClick={() => handleAddComment(publication._id)}
                        style={{
                          backgroundColor: "#CBA135",
                          color: "#F8F9FA",
                        }}
                      >
                        Agregar Comentario
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
 
        {selectedPublication && (
          <div
            className="modal fade show"
            style={{
              display: "block",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#3A506B",
                  color: "#F8F9FA",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: "#3A506B" }}>
                    Agregar Comentario
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    style={{
                      backgroundColor: "#CBA135",
                      color: "#F8F9FA",
                    }}
                  ></button>
                </div>
                <div className="modal-body">
                  <AddComment
                    publicationId={selectedPublication}
                    onCommentAdded={() => {
                      handleCommentAdded();
                      closeModal();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};