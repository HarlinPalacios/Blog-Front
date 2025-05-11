import { useState } from "react";
import api from "../../services/api";

export const useAddComment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addComment = async ({ usuario, comment, publication }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await api.post("comment/agregar", {
        usuario,
        comment,
        publication,
      });

      setSuccess("Comentario agregado con éxito.");
      return response.data.comment;
    } catch (err) {
      setError(err.response?.data?.message || "Error al agregar el comentario.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { addComment, loading, error, success };
};