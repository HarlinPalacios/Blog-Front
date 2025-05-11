import React, { useState } from "react";
import { usePublicList } from "../shared/hooks/usePublicList";
import { Navbar } from "./navs/Navbar";

export const PublicationListCom = () => {
  const { publications, loading, error } = usePublicList();
  const [selectedPublication, setSelectedPublication] = useState(null);

  const getUserSymbol = (usuario) => {
    if (!usuario) return "U";
    return usuario
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("")
      .slice(0, 2);
  };

  const handleOpenComments = (publication) => {
    setSelectedPublication(publication);
  };

  const handleCloseComments = () => {
    setSelectedPublication(null);
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
          <h1 className="display-7">Comentarios</h1>
        </div>

        {loading ? (
          <p className="text-center">Cargando publicaciones...</p>
        ) : error ? (
          <p className="text-danger text-center" style={{ color: "#6C1D45" }}>
            {error}
          </p>
        ) : (
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
                    <button
                      className="btn mt-3"
                      onClick={() => handleOpenComments(publication)}
                      style={{
                        backgroundColor: "#CBA135", 
                        color: "#F8F9FA",
                      }}
                    >
                      Ver Comentarios
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
                  backgroundColor: "#1C1F2A", 
                  color: "#F8F9FA",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title" style={{ color: "#3A506B" }}>
                    Comentarios de {selectedPublication.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseComments}
                    style={{
                      backgroundColor: "#CBA135",
                      color: "#F8F9FA", 
                    }}
                  ></button>
                </div>
                <div className="modal-body">
                  {selectedPublication.comentarios.length > 0 ? (
                    <ul className="list-group">
                      {selectedPublication.comentarios.map((comment) => (
                        <li
                          key={comment._id}
                          className="list-group-item"
                          style={{
                            backgroundColor: "#F8F9FA", 
                            borderColor: "#CED4DA", 
                            color: "#1C1F2A", 
                          }}
                        >
                          <div className="d-flex align-items-center mb-2">
                            <div
                              className="rounded-circle d-flex justify-content-center align-items-center me-2"
                              style={{
                                backgroundColor: "#3A506B", 
                                color: "#F8F9FA", 
                                width: "40px",
                                height: "40px",
                                fontSize: "14px",
                              }}
                            >
                              {getUserSymbol(comment.usuario)}
                            </div>
                            <strong style={{ color: "#3A506B" }}>
                              {comment.usuario}
                            </strong>
                          </div>
                          <p className="mb-1">{comment.comment}</p>
                          <small className="text-muted">
                            {new Date(comment.commentdate).toLocaleString()}
                          </small>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted">No hay comentarios.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};