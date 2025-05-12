import React, { useState } from "react";
import { useAddComment } from "../shared/hooks/useComment";

const AddComment = ({ publicationId, onCommentAdded }) => {
  const [usuario, setUsuario] = useState("");
  const [comment, setComment] = useState("");
  const { addComment, loading, error, success } = useAddComment();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addComment({
        usuario,
        comment,
        publication: publicationId,
      });

      setUsuario("");
      setComment("");

      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (err) {
      
    }
  };

  const comments = [
    
  ];

  const sortedComments = comments.slice().sort((a, b) => new Date(b.date) - new Date(a.date)); 

  return (
    <div
      className="container mt-4 p-4 rounded"
      style={{
        backgroundColor: "#1C1F2A", 
        color: "#F8F9FA", 
      }}
    >
      <h5 style={{ color: "#3A506B" }}>Agregar Comentario</h5>
      {publicationId ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label" style={{ color: "#F8F9FA" }}>
                Nombre de Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                style={{
                  backgroundColor: "#CED4DA",
                  borderColor: "#CED4DA", 
                  color: "#1C1F2A", 
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label" style={{ color: "#F8F9FA" }}>
                Comentario
              </label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                style={{
                  backgroundColor: "#CED4DA", 
                  borderColor: "#CED4DA", 
                  color: "#1C1F2A", 
                }}
              ></textarea>
            </div>
            {error && <p className="text-danger" style={{ color: "#6C1D45" }}>{error}</p>}
            {success && <p className="text-success" style={{ color: "#2B7A78" }}>{success}</p>}

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn"
                disabled={loading}
                style={{
                  backgroundColor: "#3A506B", 
                  color: "#F8F9FA",
                }}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>

          <div className="mt-4">
            {sortedComments.map((c) => (
              <div key={c.id} className="mb-3 p-3 rounded" style={{ backgroundColor: "#CED4DA" }}>
                <p style={{ color: "#1C1F2A" }}>
                  <strong>{c.usuario}:</strong> {c.comment}
                </p>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {new Date(c.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-danger" style={{ color: "#6C1D45" }}>
          No existen comentarios.
        </p>
      )}
    </div>
  );
};

export default AddComment;